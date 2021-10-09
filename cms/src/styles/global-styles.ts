import { createGlobalStyle } from "styled-components";
import { StyleConstants } from "./StyleConstants";
import "antd/dist/antd.css";

export const GlobalStyle = createGlobalStyle`
html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #F5F5F5;
    padding: 10;
  }

  .display-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.ant-table {
    box-shadow: 3px 5px 37px -17px rgba(0, 0, 0, 0.64);
    -webkit-box-shadow: 3px 5px 37px -17px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: 3px 5px 37px -17px rgba(0, 0, 0, 0.64);
  }
  

`;
