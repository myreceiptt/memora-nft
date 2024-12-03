"use client";

import { chakraTheme } from "@/consts/chakra";
import { ChakraProvider } from "@chakra-ui/react";
import { DarkModeProvider } from "@/context/DarkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { ThirdwebProvider } from "thirdweb/react";

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ThirdwebProvider>
          <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
        </ThirdwebProvider>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}
