import { extendTheme } from "@chakra-ui/react";

import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { fontSizes } from "./fontSizes";
import { fontWeights } from "./fontWeights";
import { letterSpacings } from "./letterSpacings";
import { lineHeights } from "./lineHeights";
import { radii } from "./radii";
import { sizes } from "./sizes";
import { space } from "./space";
import { zIndices } from "./zIndices";

const fonts = {
	body: `"Noto Sans JP", sans-serif`,
};

export const theme = extendTheme({
	fonts,
	breakpoints,
	colors,
	fontSizes,
	fontWeights,
	lineHeights,
	letterSpacings,
	zIndices,
	space,
	sizes,
	radii,
});

export type TTheme = typeof theme;
