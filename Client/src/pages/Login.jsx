import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../requestMethods";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { Link, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const NavLink = styled(Link)`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  text-decoration-color: black;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
  font-weight: 800;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    try {
      login(dispatch, { username, password });
      setErrorMessage(error);
      console.log(error);
    } catch (error) {}
  };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await publicRequest.post("/auth/login/", {
  //       username,
  //       password,
  //     });
  //     console.log("response: ", response);
  //     response.status === 200 && navigate("/");
  //   } catch (error) {
  //     console.log("error: ", error);

  //     if (error.response.data === "badUsername") {
  //       setUsernameError("The username does not exist");
  //       setPasswordError(null);
  //       setUnknownError(null);
  //     } else if (error.response.data === "badPassword") {
  //       setPasswordError("Incorrect password");
  //       setUsernameError(null);
  //       setUnknownError(null);
  //     } else {
  //       setUnknownError("Something went wrong...");
  //       setUsernameError(null);
  //       setPasswordError(null);
  //     }
  //   }
  // };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            onClick={handleClick}
            // disabled={isFetching}
          >
            LOGIN
          </Button>

          {error && <Error>{error}</Error>}

          <NavLink to="/register">CREATE A NEW ACCOUNT</NavLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
