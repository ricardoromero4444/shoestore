import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  background: #141419;
  padding: 20px;
  border-radius: 40px;

  div {
    display: flex;
  }
`;

export const User = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;
    flex-direction: column;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color #999;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;
    flex-direction: column;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color #999;
    }
  }
`;
