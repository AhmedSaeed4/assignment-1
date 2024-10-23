
export default function Home() {
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-5">
      <div className="inline-flex items-center p-5 row-start-3 row-end-7 col-start-8 col-end-12 h-25 text-white/0 animate-slideDown font-bold text-6xl">
      </div>
      <div className="bg-ryzen-850  border-solid border-ryzen-900/0 border-2 inline-flex items-center p-5 row-start-7 col-start-8 col-end-9 row-end-8 h-25 text-white/0 font-bold backdrop-blur-xl bg-gradient-to-r from-green-200/0 to-green-200/0 animate-slideright"></div>
      <div className="bg-ryzen-850  border-solid border-ryzen-900/0 border-2 inline-flex items-center p-5 row-start-7 col-start-9 row-end-8 col-end-10 text-white/0 font-bold backdrop-blur-xl bg-gradient-to-r from-ryzen-900/0 to-ryzen-900/0 animate-slideright"></div>
      <div className="bg-ryzen-850  border-solid border-ryzen-900/0 border-2 inline-flex items-center p-5 row-start-7 col-start-10 row-end-8 col-end-12  text-white/0 font-bold backdrop-blur-xl bg-gradient-to-r from-ryzen-900/0 to-ryzen-900/0 animate-slideleft">.</div>
      <div className="bg-ryzen-850   border-hidden border-2 inline-flex items-center p-5 row-start-1 col-start-1 row-end-2 col-end-2 text-white font-bold"></div>
      <div className="bg-ryzen-850  border-solid border-ryzen-900/40 border-2 inline-flex items-center p-5 row-start-4 col-start-5 row-end-7 col-end-9  text-white font-bold backdrop-blur-xl bg-gradient-to-r justify-center rounded-xl from-ryzen-900/20 to-ryzen-900/10 animate-slideleft">loading...</div>
      
    </div>
  );
}
