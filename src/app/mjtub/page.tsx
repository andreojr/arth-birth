import { Guest } from "@/components/guest";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export default async function ListPage() {
    const req = await fetch('http://localhost:3000/api/guests');
    const guests: Guest[] = await req.json();

    return (
        <div className="p-4">
            <div className="border bg-white rounded-lg p-6 grid gap-8">
                <div className="flex justify-between items-center">
                    <p className="text-2xl font-semibold">Convidados ({guests.length})</p>
                    <span className="text-zinc-600">{Math.round(guests.filter((guest) => guest.confirmed).length / guests.length * 100)}%</span>
                </div>
                <div className="grid gap-4">
                    {guests.map((guest: Guest) => (
                        <div key={guest.id} className="grid grid-flow-row grid-cols-2">
                            <p>{guest.name}</p>
                            <Button className={clsx("w-40 text-black", {
                                'bg-[#F9E163] hover:bg-[#F9E163]': !guest.confirmed,
                                'bg-[#BAEBE0] hover:bg-[#BAEBE0]': guest.confirmed
                            })}>
                                {guest.confirmed ? 'Presença confirmada!' : 'Presença pendente'}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}