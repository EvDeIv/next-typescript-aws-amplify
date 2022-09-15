import "@emotion/react";

import { TTheme as CustomTheme } from "./theme";

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
