import { FC } from "react";

import { Box, BoxProps } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Wrapper = styled(Box)`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template:
    "header      header     header"
    "nav         nav        nav"
    "breadcrumb  breadcrumb breadcrumb"
    "sideLeft    main       sideRight"
    "control     control    control"
    "footer      footer     footer";
  grid-template-rows: auto auto auto 1fr auto auto;
  grid-template-columns: min-content 1fr min-content;
`;

export const HeaderLayout = styled.header`
  background-color: white;
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

export const MainLayout = styled.main`
  grid-area: main;
  overflow: hidden;
`;

export const LayoutBackToTop = styled.footer`
  grid-area: control;
  z-index: 30;
`;

export const LayoutFooter = styled.footer`
  grid-area: footer;
`;

export const LayoutBreadcrumb = styled(Box)`
  grid-area: breadcrumb;
  z-index: 20;
  background-color: ${(props) => props.theme.colors.gray["75"]};
`;

export const NavigationLayout = styled.nav`
  grid-area: nav;
  z-index: 999;
  position: sticky;
  top: 65px;
`;

export const Layout: FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Wrapper bg={"white"} {...props}>
      {children}
    </Wrapper>
  );
};
