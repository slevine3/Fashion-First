
import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";


const Container = styled.div``;
// const Image = styled.Image;
const Info = styled.div``;
const Title = styled.h1``;
const Buttons = styled.button``;

const CategoryItem = ({item}) => {
  return (
    <Container>
      {/* <Image src={item.img}/> */}

      <Info>
        <Title>{item.title}</Title>
        <Buttons>SHOP NOW</Buttons>
      </Info>
    </Container>
  );
};

export default CategoryItem;
