import React from "react";
import LogoutButton from "./Logout";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import responsive, { mobile } from "../responsive"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// used styled components , styled-components is a React-specific CSS-in-JS styling solution that creates a platform for developers to write actual CSS code to style React components.
const Container = styled.div`
  height: 60px;
  // background-color: black;
  ${mobile({height:"50 px"})}
  
`;
const Wrapper = styled.div`
  padding: 0px 20px 0px ; // padding for space
  display: flex; //flexbox
  align-items: center;
  justify-content: space-between; // add spacce b/w elements
  ${mobile({padding:"10 0px"})}
`;
const Left = styled.div`

  flex: 1; // gives same width
  display: flex;  // to align item with its parent 
  align-items: center; // vertical center
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center; 
  margin: 25px;
  padding: 5px;
`;
const Input =styled.input`
  border: none;
  ${mobile({width:"50 px"})}

`

const Center = styled.div`
  flex: 1; // gives same width
  text-align: center;
`;
const Logo = styled.h1`
  font-size: 50px;
  font-weight: bolder;
   color: black;
  text-decoration: none;
  ${mobile({fontSize:"24px"})}

  
`
const Right = styled.div`
  flex: 1; // gives same width
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:2,justifyContent:"center"})}
`;
const MenuItem = styled.div`
  font-
  font-size: 14px;
  cursor: pointer;
  margin-left:25px;
  ${mobile({fontSize:"12px", marginLeft:"10px"})}

`
export const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
      
          <Language>EN</Language>
          {/* <SearchContainer>
            <Input placeholder="Search">
            </Input>
          <SearchIcon style={{color:"grey" , fontSize:16 }}/> 
          </SearchContainer>  */}
        </Left>
        <Center>
          <Link style={{textDecoration: 'none'}} to={"/"}>
          <Logo>
            GoLocal
          </Logo>
          </Link>

        </Center>
        <Right>
          <Link style={{textDecoration: 'none',color:"black"}} to={"/register"}>
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <MenuItem><LogoutButton></LogoutButton></MenuItem>
          <Link style={{textDecoration: 'none', color:"black"}} to ={"/login"}>
          <MenuItem>LOG IN</MenuItem>
          </Link>
          <Link to="/cart">
          
          <MenuItem>
            <Badge style={{textDecoration: 'none' , color:"black"}} badgeContent={quantity} color="primary">
            <ShoppingBagOutlinedIcon/>
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container> 
  );
};
