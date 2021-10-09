import styled from "styled-components";
import { Button } from "antd";

export const StyledButton = styled(Button)`
  min-height: 40px;
  border-radius: 16px;
  && {
    background-color: #f06292;
    color: #ffff;
  }

  &&:hover {
    background-color: #f06292 !important;
    color: #ffff;
    opacity: 0.8;
  }

  &&::focus {
    opacity: 0.8;
  }
`;
