import React from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  ${mobile({ padding: "0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
const Logo = styled.h1`
  font-weight: bolder;
  ${mobile({ fontSize: "24px" })}
  color: black;
  text-decoration: none;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Center>
          <NavLink to="/">
            <Logo>FashionFirst.</Logo>
          </NavLink>
        </Center>
        <Right>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
          <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
