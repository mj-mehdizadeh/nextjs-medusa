import { useRouter } from "next/router";
import { useEffect } from "react";
export default function ReloadListener() {
  const router = useRouter();

  useEffect(() => {
    window.onmessage = function (e) {
      if (e.data?._ == "reload") {
        router.replace(router.asPath);
      }
    };
  }, []);

  return <></>;
}
