import React from "react";

import { Spinner as SpinnerChakra, SpinnerProps } from "@chakra-ui/react";

export const Loading: React.VFC<SpinnerProps> = (props): JSX.Element => {
  return <SpinnerChakra {...props} color={"blue.550"} />;
};
