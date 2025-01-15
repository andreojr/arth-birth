import { db } from "@/lib/firebase";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  try {
    const querySnapshot = await db.collection("guests").orderBy("name", "asc").get();

    const guests = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    return NextResponse.json(guests, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar todos os usuários:", error);
    return NextResponse.json(
      { error: "Erro ao buscar os usuários" },
      { status: 500 }
    );
  }
}