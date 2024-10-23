
import Image from "next/image"
import ahmed from "../Comp 30.png"

export default async function Contact() {
    await new Promise((resolve)=>{
        setTimeout(resolve, 5000);

    })
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-5">
      <div className="inline-flex items-center p-5 row-start-3 row-end-7 col-start-8 col-end-12 h-25 text-white/65 animate-slideDown font-bold text-6xl">One small <br /> step from <br />man
      </div>
      <div className="bg-ryzen-850  border-solid border-ryzen-900/40 border-2 inline-flex items-center p-5 row-start-7 col-start-8 col-end-9 row-end-8 h-25 text-white font-bold backdrop-blur-xl bg-gradient-to-r from-green-200/40 to-green-200/10 animate-slideright">MOON</div>
      <div className="bg-ryzen-850  border-solid border-ryzen-900/40 border-2 inline-flex items-center p-5 row-start-7 col-start-9 row-end-8 col-end-10 text-white font-bold backdrop-blur-xl bg-gradient-to-r from-ryzen-900/20 to-ryzen-900/10 animate-slideright">MARS</div>
      <div className="bg-ryzen-850  border-solid border-ryzen-900/40 border-2 inline-flex items-center p-5 row-start-7 col-start-10 row-end-8 col-end-12  text-white font-bold backdrop-blur-xl bg-gradient-to-r from-ryzen-900/20 to-ryzen-900/10 animate-slideleft">ABOUT PAGE</div>
      <div className="bg-ryzen-850   border-hidden border-2 inline-flex items-center p-5 row-start-1 col-start-1 row-end-2 col-end-2 text-white font-bold"></div>
      <div className="inline-flex items-center p-5 row-start-1 row-end-3 col-start-2 col-end-4 h-25  text-white/65 animate-slideright font-bold text-6xl"><Image src={ahmed} alt="Description of Mizu" className="object-cover rounded-3xl" /> </div>
      
    </div>
  );
}
