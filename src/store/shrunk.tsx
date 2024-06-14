import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useShrunk = () => {
  const router = useRouter();
  const [isShrunk, setIsShrunk] = useState(false);
  const [isShow, setIsShow] = useState(router.route);

  useEffect(() => {
    function handleRouteChange() {
      setIsShrunk(true);
      setIsShow(router.route);
    }

    function handleRouteComplete() {
      setTimeout(() => {
        setIsShrunk(false);
      }, 300);
      setIsShow(router.route);
    }

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteComplete);
    };
  }, [isShow, router]);

  return { isShow, isShrunk };
};

export default useShrunk;
