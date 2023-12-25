import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Link } from "react-router-dom";
// import s from "../Images/s1.jpg";
import { sliderItems } from "../data";
const Container = styled.div`
  margin-top: 20px;
  /* margin-bottom: 0px; */
  /* background-color: brown; */
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-content: center;
  justify-content: center;
  position: absolute; // if u r using pos absolute the parents should be relative
  top: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  bottom: 0;
  margin: auto;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX();
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const SlideContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  /* background-color: blue; */
  /* margin: 0100px; */
  height: 100%;
  flex: 1;
`;

const Image = styled.img.attrs({
  // src: `${s}`,
})`
  height: 100%;
`;
const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;
const Title = styled.h1`
  font-size: 50px;
  font-style: italic;
  /* word-wrap: break-word; */
`;
const Discription = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewSharpIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <SlideContainer bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Discription>{item.desc}</Discription>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/products/ACCESSORIES"}
              >
                <Button>SHOW NOW</Button>
              </Link>
            </InfoContainer>
          </SlideContainer>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosSharpIcon />
      </Arrow>
    </Container>
  );
};
