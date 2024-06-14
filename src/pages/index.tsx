import Image from "next/image";
import Link from "next/link";
import useShrunk from "../store/shrunk";

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen scale-100">
      <div className="flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
        <Link
          href="/about"
          className="mb-4 relative z-10 p-4 bg-primary ring-2 ring-white shadow-xl text-base-content rounded-full h-52 w-52 flex flex-col justify-center items-center text-center"
        >
          {/* <h1 className="text-2xl font-mono relative z-10 font-bold uppercase">Gathering</h1>
        <h1 className="text-3xl font-mono relative z-10 font-bold uppercase">&</h1>
        <h1 className="text-2xl font-mono relative z-10 font-bold uppercase">Workshop</h1> */}
          <Image
            src={"/logo/vertical-08.png"}
            alt="logo"
            width={720}
            height={720}
            className="absolute w-40 animate-pulse"
          />
        </Link>
        <div className="fixed top-[40%] md:top-[44.5%] lg:top-[41%] 2xl:top-[43%] w-full">
          <div
            className={`w-full transition-all duration-300 ease-bounce h-28 bg-primary ring-2 ring-white`}
          />
        </div>
      </div>
    </div>
  );
}
