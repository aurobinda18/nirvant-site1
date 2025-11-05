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
  freeTrial?: boolean;
};

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Payload;
    const now = new Date().toISOString();

    const webCrypto = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
    const makeId = () => webCrypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

    const record = {
      id: makeId(),
      ts: now,
      ip:
        (req.headers.get("x-forwarded-for") || "")
          .split(",")[0]
          .trim() || null,
      ua: req.headers.get("user-agent") || null,
      ...data,
    };

    // Try primary path, then fallback to /tmp (useful on some hosts)
    const primaryDir = path.join(process.cwd(), "server-data");
    const primaryFile = path.join(primaryDir, "neet_enrollments.jsonl");
    const fallbackDir = "/tmp";
    const fallbackFile = path.join(fallbackDir, "neet_enrollments.jsonl");

    let writtenPath: string | null = null;
    try {
      await fs.mkdir(primaryDir, { recursive: true });
      await fs.appendFile(primaryFile, JSON.stringify(record) + "\n", "utf8");
      writtenPath = primaryFile;
    } catch (e1) {
      try {
        await fs.mkdir(fallbackDir, { recursive: true });
        await fs.appendFile(fallbackFile, JSON.stringify(record) + "\n", "utf8");
        writtenPath = fallbackFile;
      } catch (e2) {
        console.error("Enroll save error (both locations failed)", e1, e2);
        return NextResponse.json({ ok: false, error: "write-failed" }, { status: 500 });
      }
    }

    return NextResponse.json({ ok: true, id: record.id, path: writtenPath });
  } catch (err) {
    console.error("Enroll save error", err);
    return NextResponse.json({ ok: false, error: "unexpected" }, { status: 500 });
  }
}

export const dynamic = "force-dynamic"; // ensure Node runtime and file IO
export const runtime = "nodejs";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = Math.max(1, Math.min(100, parseInt(searchParams.get("limit") || "20", 10)));
    const dir = path.join(process.cwd(), "server-data");
    const file = path.join(dir, "neet_enrollments.jsonl");
    const raw = await fs.readFile(file, "utf8");
    const lines = raw
      .split(/\r?\n/)
      .filter(Boolean)
      .slice(-limit);
    const items = lines.map((l) => {
      try {
        return JSON.parse(l);
      } catch {
        return null;
      }
    }).filter(Boolean);
    return NextResponse.json({ ok: true, items });
  } catch (err) {
    return NextResponse.json({ ok: false, items: [] }, { status: 200 });
  }
}
