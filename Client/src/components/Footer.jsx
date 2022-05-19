import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
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
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
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
const NavLink = styled(Link)`
  width: 50%;
  margin-bottom: 10px;
  text-decoration: none;
  color: black;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
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
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Fashion First.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae
          hic vel facere, !
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <NavLink to="/">
            <ListItem>Home</ListItem>
          </NavLink>
          <NavLink to="/cart">
            <ListItem>Cart</ListItem>
          </NavLink>
          <NavLink to="/products/men">
            <ListItem>Men's Fashion</ListItem>
          </NavLink>
          <NavLink to="/products/women">
            <ListItem>Women's Fashion</ListItem>
          </NavLink>
          <NavLink to="/products/accessories">
            <ListItem>Accessories</ListItem>
          </NavLink>
      
        
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 3429 Pacific Beach Drive, San
          Diego, California, 92109
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          053-234-7319
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@fashionfirst.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
