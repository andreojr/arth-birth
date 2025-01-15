import { Button } from "@/components/ui/button";
import { Bowlby_One, Playwrite_IN } from "next/font/google";
import Image from "next/image";
const bowlby = Bowlby_One({ weight: ["400"] })
const playwrite = Playwrite_IN({ weight: ["400"] })

export default function Home() {
  return (
    <div className="grid gap-12 relative top-48">
      <Image src="/sunshine.png" alt="Sunshine" width={180} height={100} className="absolute -left-16 -top-40" />
      <Image src="/stars.png" alt="Stars" width={100} height={100} className="absolute left-1/2 -translate-x-1/2 -top-40" />
      <Image src="/saturn.png" alt="Saturn" width={200} height={100} className="absolute -right-10 -top-32" />

      <h1 className="text-center">
        <span className={`text-xl ${bowlby.className} text-[#5A7FA7]`}>1º ANO</span>
        <br />
        <span className={`text-5xl text-[#ED941F] ${playwrite.className}`}>Arthur</span>
      </h1>

      <div className="w-full flex justify-center">
        <form className="w-fit bg-white p-4 rounded-lg shadow-lg grid gap-2" action="/convite" method="get">
          <div className="border rounded-md grid grid-flow-col items-center gap-2 p-2">
            <span>(71) 9</span>
            <input placeholder="99999999" name="numero" maxLength={8} className="focus:outline-none w-32" />
          </div>
          <Button type="submit" className="bg-[#F9E163] hover:bg-[#F9E163] text-black">
            Acessar convite
          </Button>
        </form>
      </div>

      <div>
        <Image src="/IMG_1803.PNG" alt="Arthur" width={289.4*1.75} height={409.6} />
      </div>
    </div>
  );
}
