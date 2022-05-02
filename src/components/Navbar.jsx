import React from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Left = styled.div`
  flex: 1;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left><Language>EN</Language></Left>
        <searchContainer>
          input 
       <Search />
        </searchContainer>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
