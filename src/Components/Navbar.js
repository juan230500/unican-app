import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  padding: 0 48px;
  height: 60px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${(p) => (p.top ? "unset" : "white")};
  transition: background-color 0.5s ease-in;
  box-shadow: ${(p) =>
    p.top ? "unset" : " 0 8px 6px -6px rgba(0, 0, 0, 0.4)"};

  a {
    text-decoration: none;
    color: ${COLORS.black};
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0px solid ${COLORS.black};
  cursor: pointer;
  transition: border-width 0.05s ease-in;
  padding: 0 16px;

  :hover {
    border-bottom-width: 3px;
  }
`;

const Group = styled.div`
  display: flex;
  margin: 0 auto;
  border-bottom: ${(p) => (p.top ? "1px" : "0")} solid ${COLORS.black};
  transition: border 0.5s ease-in;
`;

const LinkButton = styled.div`
  border: 1px solid ${COLORS.black};
  padding: 12px;
  margin: auto 0;
  cursor: pointer;
  transition: border-width 0.05s ease-in;

  :hover {
    border-width: 3px;
  }
`;

const Home = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  margin: auto 0;
`;

const Navbar = (props) => {
  const [top, setTop] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setTop(window.pageYOffset === 0);
    });
  }, []);
  return (
    <Nav top={top}>
      <Home to="/home">Unican</Home>
      <Group top={top}>
        <LinkContainer>
          <Link to="/catalog">Catálogo</Link>
        </LinkContainer>
        <LinkContainer>
          <Link to="/about">Nuestra empresa</Link>
        </LinkContainer>
      </Group>
      <LinkButton>
        <Link to="/contact">Contacto</Link>
      </LinkButton>
    </Nav>
  );
};

export default Navbar;
