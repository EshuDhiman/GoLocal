import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Banner from '../components/Banner';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
const ImageContainer = styled.div`
  width: 10%;
  margin: auto;
`;

const MediumImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color:black;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function OrderDetails(props) {
  const { orderNumber, orderDate, imageUrl } = props;
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };


  return (
    <div>
      <Navbar/>
      <Banner/>
      <h1>Order Details</h1>
      <ImageContainer>
        <MediumImage src={"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7b%2F33%2F7b339f96ce1a5ee0b7ffb59712166de9759badc7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"} alt="Order Image" />
      </ImageContainer>
      <ImageContainer>
        <MediumImage src={"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8a%2F0f%2F8a0f5b02c95cb11fe751ac3875c8d05fbb3b3d05.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"} alt="Order Image" />
      </ImageContainer>
      <div>
        <span><h3>

        <label>Order Number:</label>{321}
          </h3></span>
      </div>
      <div>
        <label><h3>Order Date:06/MAY/2023 </h3></label>
        <span>{orderDate}</span>
      </div>
      <div>
        <label><h3>TOTAL ITEMS:2</h3></label>
        <label><h3>TOTAL AMOUNT:1597</h3></label>
        <span>{orderDate}</span>
      </div>
      <Button onClick={handleContinueShopping}>Continue Shopping</Button>
      <Announcement/>
      <Footer/>
    </div>
  );
}

export default OrderDetails;
