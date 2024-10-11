/** @format */

// pages/_app.tsx
import { AppProps } from "next/app";
import { ChakraProvider, Spinner, Box } from "@chakra-ui/react";
import { useAuthStore } from "../store/useAuthStore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      // Simulating an auth check delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (!user && router.pathname !== "/login") {
        router.push("/login");
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, [user, router]);

  if (loading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
