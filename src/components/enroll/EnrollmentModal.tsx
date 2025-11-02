"use client";

import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export type EnrollmentModalProps = {
  open: boolean;
  onClose: () => void;
  priceInINR: number;
  upiId: string;
  qrSrc: string; // public path to QR image (svg/png)
};

// Simple number formatter for INR
const formatINR = (value: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

export default function EnrollmentModal({ open, onClose, priceInINR, upiId, qrSrc }: EnrollmentModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitting, setSubmitting] = useState(false);
  const idPrefix = useId();

  // Step 1 form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Step 3 UTR
  const [utr, setUtr] = useState("");
  const [confirmMessage, setConfirmMessage] = useState<string | null>(null);
  const [confirmError, setConfirmError] = useState<string | null>(null);

  // Reset on open/close
  useEffect(() => {
    if (!open) return;
    setStep(1);
    setSubmitting(false);
    setErrors({});
    setConfirmMessage(null);
    setConfirmError(null);
    setUtr("");
  }, [open]);

  const validateStep1 = () => {
    const nextErrors: Record<string, string> = {};
    if (!firstName.trim()) nextErrors.firstName = "First name is required";
    if (!lastName.trim()) nextErrors.lastName = "Last name is required";
    if (!address.trim()) nextErrors.address = "Address is required";
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) nextErrors.email = "Enter a valid email";
    if (!phone.match(/^\d{10}$/)) nextErrors.phone = "Enter a 10-digit phone";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      if (!validateStep1()) return;
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
    if (step === 3) setStep(2);
  };

  const handleConfirm = async () => {
    setSubmitting(true);
    setConfirmMessage(null);
    setConfirmError(null);
    // Fake verification delay
    await new Promise((r) => setTimeout(r, 900));
    if (!utr || utr.trim().length < 6) {
      setConfirmError("Please enter a valid UTR (6+ chars)");
      setSubmitting(false);
      return;
    }
    // Simulate success
    setConfirmMessage("Payment received! We’ll verify the UTR and email you within 24 hours.");
    setSubmitting(false);
  };

  // Close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={onClose} />

          {/* Panel */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
            className="relative z-10 w-full sm:w-[640px] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50">
              <div className="text-sm text-gray-700">Secure checkout</div>
              <button aria-label="Close" onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>

            {/* Progress */}
            <div className="px-6 pt-4">
              <ol className="flex items-center justify-between gap-2 text-sm text-gray-600">
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
            </div>

            {/* Body */}
            <div className="p-6">
              {step === 1 && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Student details</h3>
                    <div className="text-sm text-gray-700">Price: <strong>{formatINR(priceInINR)}</strong></div>
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
                    <span className="inline-flex items-center gap-1"><span className="i-shield" /> Secure checkout</span>
                    <span>• Refund policy applies • 24/7 support</span>
                  </div>
                </div>
              )}

              {step === 2 && (
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
                          <li>Pay exactly <strong>{formatINR(priceInINR)}</strong> to <strong>{upiId}</strong>.</li>
                          <li>Keep your UTR/Reference number. You’ll need it to confirm.</li>
                        </ul>
                      </div>
                      <div className="mt-3 text-sm text-gray-600">
                        Trouble paying? <a className="text-orange-700 underline" href="mailto:support@nirvant.example">Contact support</a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
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
                </div>
              )}
            </div>

            {/* Footer actions */}
            <div className="px-6 pb-6 flex items-center justify-between">
              <div className="text-xs text-gray-500">By continuing you agree to our terms & refund policy.</div>
              <div className="flex items-center gap-3">
                {step > 1 && (
                  <button onClick={handleBack} className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50">Back</button>
                )}
                {step < 3 && (
                  <button onClick={handleNext} className="px-5 py-2.5 rounded-full bg-orange-600 text-white hover:bg-orange-700 shadow-md">Next</button>
                )}
                {step === 3 && (
                  <button onClick={handleConfirm} disabled={submitting} className="px-5 py-2.5 rounded-full bg-orange-600 text-white hover:bg-orange-700 shadow-md disabled:opacity-60">
                    {submitting ? "Verifying…" : "Confirm"}
                  </button>
                )}
                <button onClick={onClose} className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50">Close</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
