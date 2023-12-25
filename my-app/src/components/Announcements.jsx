import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color:teal   ;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: light;
`
export const Announcements = () => {
  return (
    <Container>
        `SUMMER SALE IS LIVE! 
        GET UPTO 70% DISCOUNT   
        ` 
    </Container>
  )
}
