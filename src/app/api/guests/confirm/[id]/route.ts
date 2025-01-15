import { db } from "@/lib/firebase";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: "O parâmetro 'id' é obrigatório" },
        { status: 400 }
      );
    }

    const docRef = db.collection("guests").doc(id);
    const docSnapshot = await docRef.get();

    if (!docSnapshot.exists) {
      return NextResponse.json(
        { error: `Nenhum usuário com o id informado foi encontrado` },
        { status: 404 }
      );
    }

    await docRef.update({ confirmed: true });

    return NextResponse.json(
      { message: `Usuário atualizado com sucesso.` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar os dados do usuário" },
      { status: 500 }
    );
  }
}