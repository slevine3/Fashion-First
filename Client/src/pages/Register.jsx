import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { login } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { publicRequest } from "../requestMethods";
import { Navigate, useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-size: 16px;
  ::placeholder {
    font-size: 16px;
  }
`;
const Error = styled.span`
  color: red;
  font-weight: 800;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState(null);
  const [EmailError, setEmailError] = useState(null);
  const [unknownError, setUnknownError] = useState(null);

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await publicRequest.post("/auth/register/", {
        username,
        email,
        password,
      });
      response.status === 201 && navigate("/login");
    } catch (error) {
      if (Object.keys(error.response.data.keyValue)[0] === "username") {
        setUsernameError("Sorry, the username already exists!");
        setEmailError(null);
        setUnknownError(null);
      } else if (Object.keys(error.response.data.keyValue)[0] === "email") {
        setEmailError("Sorry, the email already exists!");
        setUsernameError(null);
        setUnknownError(null);
      } else {
        setUnknownError("Something went wrong...");
        setUsernameError(null);
        setEmailError(null);
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            type="text"
            name="username"
          />

          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            type="email"
            name="email"
          />

          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
            name="password"
          />
          {/* <Input type="file" />  */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
          {usernameError && <Error>{usernameError}</Error>}
          {EmailError && <Error>{EmailError}</Error>}
          {unknownError && <Error>{unknownError}</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
