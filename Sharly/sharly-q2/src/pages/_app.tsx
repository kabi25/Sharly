/** @format */

// pages/_app.tsx
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useAuthStore } from "../store/useAuthStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user && router.pathname !== "/login") {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
