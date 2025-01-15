/*
import { db } from "@/lib/firebase";
import { NextResponse } from "next/server";

const guests = [
  { name: "Edvaldo", number: "92365225" },
  { name: "Terezinha", number: "92365225" },
  { name: "Rose", number: "81348893" },
  { name: "Juliana", number: "82554975" },
  { name: "Maria Luiza", number: "83515724" },
  { name: "André", number: "92634457" },
  { name: "Amanda", number: "99724854" },
  { name: "Marco", number: "91102598" },
  { name: "Alice", number: "91812097" },
  { name: "Bruno", number: "97165017" },
  { name: "Uine", number: "97165017" },
  { name: "Vitória", number: "91819371" },
  { name: "Erik", number: "91819371" },
  { name: "Beatriz", number: "91467040" },
  { name: "Patrícia", number: "92556528" },
  { name: "Maria Júlia", number: "92556528" },
  { name: "Elaine", number: "88623897" },
  { name: "Clara", number: "88623897" },
  { name: "Jailton", number: "88623897" },
  { name: "Leda", number: "88712194" },
  { name: "Zelito", number: "88693254" },
  { name: "Vagner", number: "96129164" },
  { name: "Ângela", number: "96129164" },
  { name: "Yuri", number: "96405668" },
  { name: "Matheus", number: "87626064" },
  { name: "Hemilly", number: "87626064" },
  { name: "Juan", number: "93768508" },
  { name: "João", number: "91739259" },
  { name: "Victor", number: "91202749" },
  { name: "Luíza", number: "91202749" },
  { name: "Alana", number: "99388033" },
  { name: "Guilherme", number: "99744306" },
  { name: "Marquinhos", number: "82043391" },
  { name: "Ing", number: "82043391" },
  { name: "Rosana", number: "96113389" },
  { name: "Binho", number: "88308012" },
  { name: "Neide", number: "96084300" },
  { name: "Rita", number: "82627966" },
  { name: "Carlinhos", number: "82020940" },
  { name: "Rafaela", number: "87105527" },
  { name: "Antônia", number: "88479065" },
  { name: "Daí", number: "96416664" },
  { name: "Adele", number: "96416664" },
  { name: "Nido", number: "99974999" },
  { name: "Fabiana", number: "92853554" },
  { name: "Fernanda", number: "92853554" },
  { name: "Alan", number: "87793093" },
  { name: "Negão", number: "99577931" },
  { name: "Tero", number: "88429033" },
  { name: "Gabi", number: "87365731" },
  { name: "Carmino", number: "86036651" },
  { name: "Luciana", number: "86036651" },
  { name: "Rodrigo", number: "86085545" },
  { name: "Janaina", number: "92864413" },
  { name: "Percia", number: "81343573" },
  { name: "Josenilson", number: "81343573" },
  { name: "Matheus", number: "81343573" },
  { name: "Daniela", number: "81343573" },
  { name: "Diogo", number: "81343573" },
  { name: "Thaís", number: "81343573" },
  { name: "Fátima", number: "87384189" },
  { name: "Samara", number: "93166416" },
  { name: "Sérgio", number: "93166416" },
  { name: "Márcio", number: "85218525" },
  { name: "Tati", number: "92632642" },
  { name: "Tacio", number: "87705704" },
  { name: "Vinicius", number: "96623455" },
  { name: "Bruna", number: "96623455" },
  { name: "Larissa", number: "86466025" },
  { name: "Maisa", number: "93030651" },
  { name: "Ramille", number: "82334443" },
  { name: "Daniel", number: "87541911" },
  { name: "Iraci", number: "91290204" },
  { name: "Daniel", number: "91290204" },
  { name: "Raquel", number: "82884768" },
  { name: "Henrique", number: "82884768" },
  { name: "Binha", number: "81105258" },
];

export async function GET() {
  try {
    const batch = db.batch();

    guests.forEach((guest) => {
      const docRef = db.collection("guests").doc();
      batch.set(docRef, { ...guest, confirmed: false });
    });

    await batch.commit();

    return NextResponse.json(
      { message: "Seed executado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao executar seed:", error);
    return NextResponse.json(
      { error: "Erro ao executar seed" },
      { status: 500 }
    );
  }
}
*/