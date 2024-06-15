import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative overflow-hidden">
      <div className="text-center mb-10 font-ls">
        <p className="opacity-50 mb-3">
          Kami mengundang Anda untuk hadir dalam acara spesial:
        </p>
        <h1 className="text-2xl md:text-3xl font-bold uppercase font-invit">
          Workshop & Gathering
        </h1>
        <h1 className="text-2xl md:text-3xl font-bold uppercase font-invit">
          LS Skincare Reborn
        </h1>
        <h1 className="text-lg md:text-xl font-bold capitalize font-ls mb-5">
          Tema: Develop and Success Together
        </h1>
        <p>
          Bersama owner LS Skincare Reborn, kita akan menjelajahi perjalanan
          menuju kesuksesan bersama dalam sebuah sesi inspiratif dan penuh
          wawasan.
        </p>
        <p className="font-bold text-lg my-3">
          Saturday | 06 July 2024 | 09:00 WIB
        </p>
        <div className="mb-6">
          <p className="font-medium text-sm uppercase">
            Convention Hall | <a href="https://maps.app.goo.gl/n1S89Z9L7go2SvVDA" className="link link-hover font-bold">FITRA HOTEL</a> | MAJALENGKA
          </p>
          <p className="font-normal text-sm">
            Penampilan spesial dari{" "}
            <span className="font-bold underline">ENKA X-Factor</span>!
          </p>
        </div>
        <p className="font-normal text-sm">
          Jangan lewatkan kesempatan berharga ini untuk belajar, berbagi, dan
          berkembang bersama!
        </p>
      </div>
      <a
        href={"https://forms.gle/4vJDZVpSFTv7wGQL7"}
        className="btn btn-primary rounded-lg font-invit text-xl font-medium animate-pulse"
      >
        Registration
      </a>
      <div className="flex justify-between items-start w-full mt-3">
        <div className="text-xs font-ls font-semibold text-start">
          <p>Salam sukses,</p>
          <p>Tim LS Skincare Reborn,</p>
        </div>
        <div className="text-xs font-ls font-semibold text-end">
          <p>DC: Pitch Oren</p>
        </div>
      </div>
    </div>
  );
}
