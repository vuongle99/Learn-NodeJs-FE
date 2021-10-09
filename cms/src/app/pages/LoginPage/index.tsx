import React, { FunctionComponent } from "react";
import { useHistory } from "react-router";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { Wrapper } from "./styles";

interface IProps {}

const LoginPage: FunctionComponent<IProps> = () => {
  const history = useHistory();

  const onLoginHandler = () => {
    history.push("/home");
  };

  return (
    <Wrapper>
      <div className="logo-image"></div>
      <div className=" login-form">
        <div className="login-title">SKINCARE LOGIN</div>

        <div className="form-item">
          <div className="label">Email:</div>
          <Input
            className="input"
            placeholder="Enter your email..."
            type="email"
          />
        </div>

        <div className="form-item">
          <div className="label">Password:</div>
          <Input
            className="input"
            placeholder="Enter the password..."
            type="password"
          />
        </div>

        <div className="form-button">
          <Button className="login-btn" type="primary" onClick={onLoginHandler}>
            Login
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
