import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;

  .logo-image {
    flex: 1;
    background-color: grey;
  }

  .login-form {
    flex: 1;
    background-color: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .login-title {
      font-size: larger;
      font-weight: 800;
      color: #f06292;
    }

    .form-item {
      margin-top: 16px;
      width: 60%;

      .label {
        font-weight: 600;
      }

      .input {
        margin-top: 4px;
      }
    }

    .form-button {
      margin-top: 16px;
      width: 50%;

      .login-btn {
        width: 100%;
      }
    }
  }
`;
