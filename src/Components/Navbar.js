import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 48px;
  height: 96px;

  a {
    text-decoration: none;
    color: ${COLORS.black};
  }
`;

const Img = styled.img`
  max-height: 88px;
`;

const Group = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  gap: 32px;
  padding: 16px 0;
  backdrop-filter: blur(6px);
`;

const Focus = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  padding: 16px;
  align-items: center;
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to="/home">
        <Img src={logo} alt="logo"></Img>
      </Link>
      <Group>
        <Link to="/catalog">Catálogo</Link>
        <Link to="/about">Nuestra empresa</Link>
      </Group>
      <Focus>
        <Link to="/contact">Contacto</Link>
      </Focus>
    </Nav>
  );
};

export default Navbar;
