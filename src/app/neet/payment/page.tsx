"use client";

import React, { Suspense, useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { paymentData, pricePlans } from "@/data/neetCourse";

const formatINR = (value: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

function PaymentPageInner() {
  const search = useSearchParams();
  const router = useRouter();
  const idPrefix = useId();

  const duration = search.get("duration") ?? "NEET 2026";
  const priceParam = search.get("price");

  const inferredPrice = useMemo(() => {
    const byDuration = pricePlans.find((p) => p.duration === duration)?.currentPrice;
    const fromQuery = priceParam ? parseInt(priceParam, 10) : undefined;
    return Number.isFinite(fromQuery as number) ? (fromQuery as number) : byDuration ?? 3500;
  }, [duration, priceParam]);
  const isFreeTrial = inferredPrice === 0;

  const upiId = paymentData.upiId;
  const qrSrc = paymentData.qrImage;

  // Steps
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitting, setSubmitting] = useState(false);

  // Form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [academicStatus, setAcademicStatus] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // UTR
  const [utr, setUtr] = useState("");
  const [confirmMessage, setConfirmMessage] = useState<string | null>(null);
  const [confirmError, setConfirmError] = useState<string | null>(null);

  // Local persistence (avoid losing data on refresh)
  const STORAGE_KEY = "neet-payment-form-v1";
  const saveDebounce = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load saved data once on mount
  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (!raw) return;
      const data = JSON.parse(raw) as Partial<{
        firstName: string;
        lastName: string;
        academicStatus: string;
        address: string;
        email: string;
        phone: string;
        utr: string;
        step: 1 | 2 | 3;
      }>;
      if (data.firstName) setFirstName(data.firstName);
      if (data.lastName) setLastName(data.lastName);
      if (data.academicStatus) setAcademicStatus(data.academicStatus);
      if (data.address) setAddress(data.address);
      if (data.email) setEmail(data.email);
      if (data.phone) setPhone(data.phone);
      if (data.utr) setUtr(data.utr);
      if (data.step) setStep(data.step);
    } catch {}
  }, []);

  // Save when fields change (debounced)
  useEffect(() => {
    const payload = { firstName, lastName, academicStatus, address, email, phone, utr, step };
    if (saveDebounce.current) clearTimeout(saveDebounce.current);
    saveDebounce.current = setTimeout(() => {
      try {
        if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      } catch {}
    }, 300);
    return () => {
      if (saveDebounce.current) clearTimeout(saveDebounce.current);
    };
  }, [firstName, lastName, academicStatus, address, email, phone, utr, step]);

  const validateStep1 = () => {
    const next: Record<string, string> = {};
    if (!firstName.trim()) next.firstName = "First name is required";
    if (!lastName.trim()) next.lastName = "Last name is required";
    if (!academicStatus) next.academicStatus = "Please select your current class/status";
    if (!address.trim()) next.address = "Address is required";
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) next.email = "Enter a valid email";
    if (!phone.match(/^\d{10}$/)) next.phone = "Enter a 10-digit phone";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && !validateStep1()) return;
    // Fire-and-forget: save an admin copy when user completes Step 1
    if (step === 1) {
      void fetch("/api/neet/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "checkout",
          duration,
          price: inferredPrice,
          freeTrial: isFreeTrial,
          firstName,
          lastName,
          academicStatus,
          address,
          email,
          phone,
          step: 1 as const,
          ts: new Date().toISOString(),
        }),
      }).catch(() => {});
      // If it's a free trial, skip payment and go straight to confirmation
      if (isFreeTrial) {
        setConfirmMessage(
          "Free trial activated! You're enrolled for 3 days. We'll email you details and next steps shortly."
        );
        // Send a confirm event without UTR
        void fetch("/api/neet/enroll", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "confirm",
            duration,
            price: inferredPrice,
            freeTrial: true,
            firstName,
            lastName,
            academicStatus,
            address,
            email,
            phone,
            step: 3 as const,
            ts: new Date().toISOString(),
          }),
        }).catch(() => {});
        setStep(3);
        return;
      }
    }
    setStep((s) => (s === 1 ? 2 : 3));
  };
  const handleBack = () => setStep((s) => (s === 3 ? 2 : 1));

  const handleConfirm = async () => {
    setSubmitting(true);
    setConfirmError(null);
    setConfirmMessage(null);
    await new Promise((r) => setTimeout(r, 900));
    if (!utr || utr.trim().length < 6) {
      setConfirmError("Please enter a valid UTR (6+ chars)");
      setSubmitting(false);
      return;
    }
    // Save admin copy with UTR on confirm
    try {
      await fetch("/api/neet/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "confirm",
          duration,
          price: inferredPrice,
          freeTrial: false,
          firstName,
          lastName,
          academicStatus,
          address,
          email,
          phone,
          utr,
          step: 3 as const,
          ts: new Date().toISOString(),
        }),
      });
    } catch {}
    setConfirmMessage(
      "We’ll verify the UTR and email you within 24 hours. Save this page or your order ID for reference."
    );
    setSubmitting(false);
  };

  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setAcademicStatus("");
    setAddress("");
    setEmail("");
    setPhone("");
    setUtr("");
    setErrors({});
    setConfirmMessage(null);
    setConfirmError(null);
    setStep(1);
    try {
      if (typeof window !== "undefined") localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-orange-100">
      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => router.push("/neet#pricing")}
            className="text-sm text-orange-700 underline hover:opacity-80">← Back to pricing</button>
          <div className="text-sm text-gray-700">Secure checkout</div>
        </div>

        {/* Title & price */}
        <div className="mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Enroll: {duration}</h1>
          <p className="text-gray-700">Amount due: <strong>{formatINR(inferredPrice)}</strong></p>
        </div>

        {/* Progress */}
        <ol className="flex items-center justify-between gap-2 text-sm text-gray-600 mb-6">
          {[
            { n: 1, label: "Checkout" },
            { n: 2, label: "Payment" },
            { n: 3, label: "Confirmation" },
          ].map(({ n, label }) => (
            <li key={n} className="flex-1 flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs ${step >= (n as 1|2|3) ? "bg-orange-600" : "bg-gray-300"}`}>
                {n}
              </div>
              <span className={`hidden sm:inline ${step >= (n as 1|2|3) ? "text-gray-900" : "text-gray-500"}`}>{label}</span>
              {n !== 3 && <div className={`flex-1 h-1 rounded ${step > (n as 1|2|3) ? "bg-orange-400" : "bg-gray-200"}`}></div>}
            </li>
          ))}
        </ol>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden">
          {/* Body */}
          <div className="p-6">
            {step === 1 && (
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Student details</h3>
                  <div className="text-sm text-gray-700">Price: <strong>{formatINR(inferredPrice)}</strong></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`${idPrefix}-first`} className="block text-sm font-medium text-gray-700">First name</label>
                    <input id={`${idPrefix}-first`} value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-300" />
                    {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor={`${idPrefix}-last`} className="block text-sm font-medium text-gray-700">Last name</label>
                    <input id={`${idPrefix}-last`} value={lastName} onChange={(e)=>setLastName(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-300" />
                    {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor={`${idPrefix}-status`} className="block text-sm font-medium text-gray-700">Current class/status</label>
                    <select
                      id={`${idPrefix}-status`}
                      value={academicStatus}
                      onChange={(e)=>setAcademicStatus(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-gray-300 p-3 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                      <option value="" disabled>
                        Select your current class/status
                      </option>
                      <option value="class11">Class 11 (currently studying)</option>
                      <option value="class12">Class 12 (currently studying)</option>
                      <option value="completed12">Completed 12th (passed)</option>
                    </select>
                    {errors.academicStatus && <p className="mt-1 text-xs text-red-600">{errors.academicStatus}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor={`${idPrefix}-address`} className="block text-sm font-medium text-gray-700">Address</label>
                    <input id={`${idPrefix}-address`} value={address} onChange={(e)=>setAddress(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-300" />
                    {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address}</p>}
                  </div>
                  <div>
                    <label htmlFor={`${idPrefix}-email`} className="block text-sm font-medium text-gray-700">Email</label>
                    <input id={`${idPrefix}-email`} type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-300" />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor={`${idPrefix}-phone`} className="block text-sm font-medium text-gray-700">Phone</label>
                    <input id={`${idPrefix}-phone`} inputMode="numeric" pattern="[0-9]*" value={phone} onChange={(e)=>setPhone(e.target.value.replace(/\D/g, ""))} className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-300" />
                    {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                  </div>
                </div>
                <div className="text-xs text-gray-500 flex flex-wrap items-center gap-2">
                  <span>Secure checkout</span>
                  <span>• Refund policy applies • 24/7 support</span>
                </div>
              </div>
            )}

            {step === 2 && !isFreeTrial && (
              <div className="space-y-5">
                <h3 className="text-xl font-semibold text-gray-900">Pay via UPI</h3>
                <p className="text-gray-700">Scan the QR or pay to <strong className="text-gray-900">{upiId}</strong>. Then enter your UTR on the next step.</p>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="p-4 rounded-2xl bg-white shadow border border-orange-100">
                    <Image src={qrSrc} alt="UPI QR code" width={220} height={220} className="rounded-lg" />
                  </div>
                  <div className="flex-1 w-full">
                    <div className="rounded-xl p-4 bg-yellow-50 border border-yellow-200 text-gray-800">
                      <ul className="list-disc ml-4 space-y-2 text-sm">
                        <li>Use any UPI app (GPay, PhonePe, Paytm, BHIM, etc.).</li>
                        <li>Pay exactly <strong>{formatINR(inferredPrice)}</strong> to <strong>{upiId}</strong>.</li>
                        <li>Keep your UTR/Reference number. You’ll need it to confirm.</li>
                      </ul>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      Trouble paying? <a className="text-orange-700 underline" href="mailto:nirvant.trgyy@gmail.com">Contact support</a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                {!isFreeTrial ? (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900">Enter your UTR to confirm</h3>
                    <p className="text-gray-700 text-sm">We verify manually within a few hours. You’ll get an email confirmation.</p>
                    <div>
                      <label htmlFor={`${idPrefix}-utr`} className="block text-sm font-medium text-gray-700">UTR / reference code</label>
                      <input id={`${idPrefix}-utr`} value={utr} onChange={(e)=>setUtr(e.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-300" placeholder="e.g., 1234ABCD" />
                    </div>
                    {confirmError && <div className="text-sm text-red-600">{confirmError}</div>}
                    {confirmMessage && (
                      <div className="rounded-xl p-4 bg-green-50 border border-green-200 text-green-800">
                        {confirmMessage}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900">You're in! 🎉</h3>
                    <p className="text-gray-700 text-sm">Your 3-day Free Trial is active. We’ll email you onboarding details shortly.</p>
                    <div className="rounded-xl p-4 bg-amber-50 border border-amber-200 text-amber-800">
                      Enjoy the trial period to explore mentorship, plans, and support.
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-gray-600">
              <span>By continuing you agree to our terms & refund policy.</span>
              {step >= 1 && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="underline hover:text-gray-800"
                  aria-label="Clear all form fields"
                >
                  Clear all
                </button>
              )}
            </div>
            <div className="flex items-center gap-3">
              {step > 1 && (
                <button onClick={handleBack} className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">Back</button>
              )}
              {step === 1 && (
                <button onClick={handleNext} className="px-5 py-2.5 rounded-full bg-orange-600 text-white hover:bg-orange-700 shadow-md">
                  {isFreeTrial ? "Start Free Trial" : "Next"}
                </button>
              )}
              {step === 2 && !isFreeTrial && (
                <button onClick={handleNext} className="px-5 py-2.5 rounded-full bg-orange-600 text-white hover:bg-orange-700 shadow-md">Next</button>
              )}
              {step === 3 && !isFreeTrial && (
                <button onClick={handleConfirm} disabled={submitting} className="px-5 py-2.5 rounded-full bg-orange-600 text-white hover:bg-orange-700 shadow-md disabled:opacity-60">
                  {submitting ? "Verifying…" : "Confirm"}
                </button>
              )}
              {step === 3 && isFreeTrial && (
                <button onClick={() => router.push("/neet")} className="px-5 py-2.5 rounded-full bg-orange-600 text-white hover:bg-orange-700 shadow-md">
                  Done
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Extras */}
        <div className="mt-6 text-sm text-gray-600">
          <p>Need help? Email <a className="text-orange-700 underline" href="mailto:support@nirvant.example">nirvant.trgyy@gmail.com</a></p>
        </div>
      </div>
    </main>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-orange-100" />}> 
      <PaymentPageInner />
    </Suspense>
  );
}
