// app/api/students/route.ts
import { NextResponse } from "next/server";

let students: { id: number; name: string; phone: string }[] = [];

export async function GET() {
  return NextResponse.json(students);
}

export async function POST(req: Request) {
  const { name, phone } = await req.json();
  const newStudent = {
    id: students.length + 1,
    name,
    phone,
  };

  students.push(newStudent);
  return NextResponse.json(newStudent, { status: 201 });
}
