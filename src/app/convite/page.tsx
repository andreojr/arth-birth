import { Guest } from "@/components/guest";
import { ArrowDown, MapPin, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Bowlby_One, Playwrite_IN } from "next/font/google";
const bowlby = Bowlby_One({ weight: ["400"], subsets: ["latin"] })
const playwrite = Playwrite_IN({ weight: ["400"] })

export default async function InvitePage({ searchParams }: { searchParams: Promise<{ numero: string }> }) {
    const { numero } = await searchParams;
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guests/${numero}`);
    if (!req.ok || numero === "") {
        return (
            <div className="text-center grid gap-4">
                <div className="text-center max-w-[200px] leading-tight">Nenhum convite associado ao número informado.</div>
                <Link href="/">
                    <Button className="bg-[#F9E163] hover:bg-[#F9E163] text-black">
                        Voltar
                    </Button>
                </Link>
            </div>
        )
    }
    const guests = await req.json();

    return (
        <div className="self-end grid gap-8">
            <audio autoPlay loop>
                <source src="/bita.mp3" type="audio/mpeg" />
                Your browser does not support the audio element
            </audio>
            <div className="p-6">
                <div className="relative border bg-[#F2FAFF] py-6 px-12 rounded-lg text-center grid gap-4 overflow-hidden text-[#5A7FA7]">
                    <Image src="/moon.png" alt="Moon" width={180} height={100} className="absolute -left-20 -top-20" />
                    <Image src="/rocket.png" alt="Rocket" width={160} height={100} className="absolute -right-10 -top-5" />
                    <Image src="/ufo.png" alt="UFO" width={150} height={50} className="absolute -right-8 -bottom-10" />
                    <Image src="/arthur-croped.png" alt="Arthur" width={150} height={50} className="absolute left-0 bottom-0" />
                    <div>
                        <p className="text-[#F4B955] font-bold">5, 4, 3, 2</p>
                        <p className={`text-3xl ${bowlby.className}`}>UM!</p>
                    </div>
                    <p className={`text-3xl text-[#F4B955] font-bold ${playwrite.className}`}>Arthur</p>
                    <p>Está completando sua primeira volta em torno do sol!</p>
                    <p className={playwrite.className}>Vamos comemorar!</p>
                    <div className="flex items-center justify-center gap-8">
                        <span className={bowlby.className}>SÁBADO</span>
                        <div className="flex items-center justify-center gap-1 relative">
                            <Star size={48} className="absolute z-0 text-[#F9E163]" fill="#F9E163" />
                            <span className={`z-10 font-bold ${bowlby.className}`}>8</span>
                        </div>
                        <span className={bowlby.className}>MARÇO</span>
                    </div>
                    <p className={bowlby.className}>ÀS 18H00</p>
                    <Link href="https://g.co/kgs/r7nHhSF" className="underline flex items-center justify-center gap-1">
                        <span>Ver endereço</span>
                        <MapPin size={18} />
                    </Link>
                    <p className={playwrite.className}>Até lá!</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center font-bold">
                <span>Confirme sua presença!</span>
                <ArrowDown size={18} />
            </div>
            <div className="border bg-white rounded-tl-xl rounded-tr-xl p-6 grid gap-8">
                <p className="text-2xl font-semibold">Convidados</p>
                <div className="grid gap-4">
                    {guests.map((guest: Guest) => (
                        <Guest key={guest.id} guest={guest} />
                    ))}
                </div>
            </div>
        </div>
    )
}