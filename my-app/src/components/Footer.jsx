// import {
//   Facebook,
//   Instagram,
//   MailOutline,
//   Phone,
//   Pinterest,
//   Room,
//   Twitter,
// } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;


const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>GOLOCAL.</Logo>
        <Desc>
        GoLocal is an ecommerce website that offers a wide range of clothing and accessories for both men and women. It is designed to cater to the latest fashion trends and styles, providing a unique shopping experience for fashion enthusiasts. With a user-friendly interface and a vast selection of products, GoLocal is the perfect destination for anyone looking to elevate their fashion game. From casual wear to formal attire, from everyday accessories to special occasion pieces, GoLocal has it all. Shop with us today and stay ahead of the fashion curve!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            {/* <Facebook /> */}
          </SocialIcon>
          <SocialIcon color="E4405F">
            {/* <Instagram /> */}
          </SocialIcon>
          <SocialIcon color="55ACEE">
            {/* <Twitter /> */}
          </SocialIcon>
          <SocialIcon color="E60023">
            {/* <Pinterest /> */}
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>TIPS</Title>
        <List>
        GoLocal website regularly updates its selection of clothing and accessories, so be sure to check out the new arrivals section for the latest fashion trends and styles.  {/* <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>ManFashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem> */}
          {/* <ListItem>My Account</ListItem> */}
          {/* <ListItem>Order Tracking</ListItem> */}
          {/* <ListItem>Wishlist</ListItem> */}
          {/* <ListItem>Wishlist</ListItem> */}
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          +919292929292
          
          {/* <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336 */}
        </ContactItem>
        <ContactItem>
        Golocal@gmail.com
          {/* <Phone style={{marginRight:"10px"}}/> +1 234 56 78 */}
        </ContactItem>
        <ContactItem>
          {/* <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev */}
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
