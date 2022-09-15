import { FC, ReactElement } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import { render, RenderOptions } from "@testing-library/react";
import "@testing-library/jest-dom";

import { theme } from "@src/theme";

const ChakraRenderer: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider resetCSS theme={theme}>
        {children}
      </ChakraProvider>
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: ChakraRenderer, ...options });

export * from "@testing-library/react";
export { customRender as render };
