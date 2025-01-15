'use client'

import { useState } from "react";
import { Button } from "./ui/button";
import clsx from "clsx";
import { LoaderCircle } from "lucide-react";

export type Guest = {
    id: string;
    name: string;
    number: string;
    confirmed: boolean;
}

export function Guest({ guest }: { guest: Guest }) {
    const [isConfirmed, setIsConfirmed] = useState(guest.confirmed);
    const [loading, setLoading] = useState(false);

    async function confirmPresence() {
        try {
            setLoading(true);
            const req = await fetch(`/api/guests/confirm/${guest.id}`, {
                method: 'PATCH',
            })
            if (!req.ok) {
                throw new Error('Erro ao confirmar presença');
            }
            setIsConfirmed(true);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    async function unconfirmPresence() {
        try {
            setLoading(true);
            const req = await fetch(`/api/guests/unconfirm/${guest.id}`, {
                method: 'PATCH',
            })
            if (!req.ok) {
                throw new Error('Erro ao confirmar presença');
            }
            setIsConfirmed(false);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div key={guest.id} className="flex justify-between items-center">
            <p>{guest.name}</p>
            <Button onClick={isConfirmed ? unconfirmPresence : confirmPresence} className={clsx("w-40 text-black", {
                'bg-[#F9E163] hover:bg-[#F9E163]': !isConfirmed,
                'bg-[#BAEBE0] hover:bg-[#BAEBE0]': isConfirmed
            })}>
                {loading ? (
                    <LoaderCircle className="animate-spin" />
                ) : (isConfirmed ? 'Presença confirmada!' : 'Confirmar presença')}
            </Button>
        </div>
    )
}