import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: light;
`;
const Banner = () => {
  return (
    <Container>
      <marquee behavior="Scroll" direction="right">
        <p>`EXPLORE YOUR STYLE! SHOP WITH US NOW `</p>
      </marquee>
    </Container>
  );
};
export default Banner;
