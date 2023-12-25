import React from "react";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";
//public stripe key
const KEY =
  "pk_test_51MwItuSF5CB8v0XVIhnfALcvXgXdv3BID78plnkpzIyoAvoUqM4gz5Ysklo9WGJe4zZK3jyEW02mbl3HvHIKAmEy0036o6W7hy";

const Button = styled.button`
  font-size: 24px;
  padding: 16px 32px;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0062cc;
  }
`;

const CenteredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (stripeToken) {
      makeRequest();
    }
  }, [stripeToken]);
  return (
    <CenteredDiv>
      <StripeCheckout
        name="goLocal"
        image=""
        billingAddress
        shippingAddress
        discription="your total 2000"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <Button>Pay</Button>
      </StripeCheckout>
    </CenteredDiv>
  );
};

export default Pay;
