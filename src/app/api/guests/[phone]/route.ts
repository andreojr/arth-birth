import { db } from "@/lib/firebase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { phone: string } }
): Promise<NextResponse> {
  try {
    const { phone } = params;

    if (!phone) {
      return NextResponse.json(
        { error: "O parâmetro 'phone' é obrigatório" },
        { status: 400 }
      );
    }

    const querySnapshot = await db
      .collection("guests")
      .where("number", "==", phone)
      .get();

    if (querySnapshot.empty) {
      return NextResponse.json(
        { error: `Nenhum usuário com o telefone '${phone}' foi encontrado` },
        { status: 404 }
      );
    }

    const users = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return NextResponse.json(
      { error: "Erro ao buscar os dados do usuário" },
      { status: 500 }
    );
  }
}