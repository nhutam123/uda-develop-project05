import { Styles } from "./styles";
import { Navbar } from "../../navbar";

const { Container, Header } = Styles;

export const Sidebar = () => {
  return (
    <Container>
      <Header>Danh Muc</Header>
      <Navbar />
    </Container>
  );
};
