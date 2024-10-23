import Link from "next/link";
export default function NavBar() {
    return (
        <div className="inline-flex w-full items-center  pl-20 pr-20 gap-8 text-white   h-[150px]">
            <div className="text-ryzen-900 font-serif text-xl ">
                
            </div> 

            <div  className="inline-flex w-full items-center place-content-center  gap-8 text-ryzen-900   h-[150px]">
            <div className="flex items-center justify-center gap-8 text-ryzen-900  font-sans h-[150px] animate-slideDown">
                <Link href={"/"} className=" hover:text-green-200"> Home</Link>
                <br />
                <Link href={"about"} className="hover:text-green-200"> About</Link>
                <br />
                <Link href={"doc"} className=" hover:text-green-200"> Doc </Link>
                <br />
                <Link href={"login"} className=" hover:text-green-200"> Login </Link>
                <br />
                <Link href={"info"} className=" hover:text-green-200"> Info</Link>
                <br />
            </div>
        </div></div>
    );
}
