import styled from "styled-components";
import {accesories1}  from "../data";
import { mobile } from "../responsive";
import AccesoriesItem from "./AccesoriesItem";

const Container = styled.div`
  display: flex;
  padding: 0px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Accesories = () => {
  return (
    <Container>
      {accesories1.map((item) => (
        <AccesoriesItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Accesories;
