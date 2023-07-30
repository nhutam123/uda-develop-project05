import { ReactElement } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { Styles } from "./styles";

const { Container, Wrapper, Content, SidebarContainer } = Styles;

type LayoutProps = {
  children: ReactElement;
};

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <Wrapper>
      <Header />
      <Container>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
};
