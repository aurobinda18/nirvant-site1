import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

type Payload = {
  action: "checkout" | "confirm";
  duration?: string;
  price?: number;
  firstName?: string;
  lastName?: string;
  academicStatus?: string;
  address?: string;
  email?: string;
  phone?: string;
  utr?: string;
  step?: 1 | 2 | 3;
  ts?: string;
};

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Payload;
    const now = new Date().toISOString();

    const record = {
      id: (globalThis as any).crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      ts: now,
      ip:
        (req.headers.get("x-forwarded-for") || "")
          .split(",")[0]
          .trim() || null,
      ua: req.headers.get("user-agent") || null,
      ...data,
    };

    const dir = path.join(process.cwd(), "server-data");
    const file = path.join(dir, "neet_enrollments.jsonl");
    await fs.mkdir(dir, { recursive: true });
    await fs.appendFile(file, JSON.stringify(record) + "\n", "utf8");

    return NextResponse.json({ ok: true, id: record.id });
  } catch (err) {
    console.error("Enroll save error", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

export const dynamic = "force-dynamic"; // ensure Node runtime and file IO
