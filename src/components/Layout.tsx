import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Layout = ({ children }: any) => {
  const router = useRouter();
  const [isShrunk, setIsShrunk] = useState(false);
  const [isShow, setIsShow] = useState("/");

  useEffect(() => {
    const handleRouteChange = () => {
      console.log('Route is changing...');
      setIsShrunk(true);
    };
  
    const handleRouteComplete = () => {
      console.log('Route change complete.');
      setTimeout(() => {
        setIsShrunk(false);
      }, 300);
      setIsShow(router.route);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteComplete);
    };
  }, [router]);

  return (
    <main className="grid w-full place-items-center">
      <div className="relative flex flex-col w-full max-h-screen min-h-screen custom-scrollbar overflow-hidden border-0 lg:border lg:max-w-lg lg:w-full lg:rounded-md">
        <div
          className={`absolute left-0 md:left-10 lg:left-0 w-full transition-all duration-700 ease-bounce ${
            isShrunk ? "-top-[100%] opacity-0" : "-top-[35%] opacity-100"
          } ${isShow === "/" ? "hidden" : ""}`}
        >
          <div className="absolute top-[75%] 2xl:top-[65%] left-0 md:-left-10 lg:left-0 z-10 flex items-center justify-center w-full">
            <Image
              src={"/logo/vertical-06.png"}
              alt="logo"
              width={720}
              height={720}
              className={`w-32 h-32`}
            />
          </div>
          <Image
            src={"/ornamen/ornamen-1.png"}
            alt="ornamen"
            width={720}
            height={720}
            className={`motion-safe:animate-[spin_30s_linear_infinite] opacity-50`}
          />
        </div>
        <div className="fixed inset-0 lg:absolute flex items-center justify-center">
          <div
            className={`absolute w-full transition-all md:left-10 lg:left-0 duration-1000 ease-bounce ${
              isShow === "/"
                ? "top-[19.5%] opacity-100 lg:top-[16.9%] xl:top-[17%] 2xl:top-[22.8%]"
                : "-top-[100%] opacity-0"
            }`}
          >
            <Image
              src={"/ornamen/ornamen-1.png"}
              alt="ornamen"
              width={720}
              height={720}
              className="motion-safe:animate-[spin_30s_linear_infinite]"
            />
          </div>
        </div>
        <main className={`relative z-20`}>{children}</main>
        <div className="absolute bottom-0 left-4 w-full h-full grid items-end">
          <div
            className={`bg-primary w-16 relative rounded-t-md p-4 shadow-md shadow-primary bg-opacity-80 transition-all duration-700 ease-bounce ${
              isShrunk ? "h-[10%] opacity-0" : "h-[30%] opacity-100"
            } ${isShow !== "/" ? "hidden" : ""}`}
          >
            <h1 className="card-title font-mono whitespace-nowrap -rotate-90 my-32 text-primary-content opacity-80">
              JUNI 20, 2024
            </h1>
          </div>
        </div>

        <footer
          className={`footer items-center px-4 py-1 bg-primary bg-opacity-80 text-primary-content z-10 absolute bottom-0 transition-all duration-700 ease-bounce ${
            isShrunk || isShow === "/" ? "opacity-0" : "opacity-100"
          }`}
        >
          <aside className="items-center justify-center text-center w-full grid-flow-col">
            <Image
              src={"/logo/vertical-08.png"}
              width={720}
              height={720}
              alt="logo"
              className="w-8 h-8"
            />
            <p>Copyright © 2024 - LS SKincare Reborn</p>
          </aside>
        </footer>
      </div>
    </main>
  );
};

export default Layout;
