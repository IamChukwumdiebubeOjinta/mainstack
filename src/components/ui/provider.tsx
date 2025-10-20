import type { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";

export default function UIProvider({ children }: { children: ReactNode }) {
  return <ChakraProvider value={theme}>{children}</ChakraProvider>;
}
