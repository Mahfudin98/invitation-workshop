import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative overflow-hidden">
      <div className="text-center mb-16 font-ls">
        <p className="opacity-50 mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <h1 className="text-2xl md:text-3xl font-bold uppercase ">
          Gathering & Workshop
        </h1>
        <h1 className="text-lg md:text-xl opacity-80 font-bold capitalize font-serif mb-5">
          Agen Reseller LS Skincare Reborn
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          asperiores repudiandae in quas similique aliquid natus omnis optio
          consequatur dicta!
        </p>
        <p className="font-bold text-lg my-3">
          Kamis | 20 Juni 2024 | 09:00 WIB
        </p>
        <div className="mb-6">
          <p className="font-semibold text-sm">FITRA HOTEL | MAJALENGKA</p>
          <p className="font-semibold text-sm">
            X ADDRESS | SUBURB | MAJALENGKA KOTA
          </p>
        </div>
        <p>Lorem ipsum dolor sit amet XXX-xxxx/example@email.com</p>
      </div>
      <a
        href={"https://forms.gle/4vJDZVpSFTv7wGQL7"}
        className="btn btn-primary rounded-lg font-invit text-xl font-medium animate-pulse"
      >
        Registration
      </a>
    </div>
  );
}
