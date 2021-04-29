import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import headerBg from "../assets/headerBg.jpg";
import Navbar from "./Navbar";

const Div = styled.div`
  height: 640px;

  background-image: url(${headerBg});
  background-size: cover;
  background-position: top;
`;

const Container = styled.div`
  padding: 64px 48px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: ${COLORS.black};
  font-size: 6rem;
  font-weight: normal;
`;

const SubTitle = styled.h1`
  color: ${COLORS.grey};
  font-weight: normal;
  text-transform: uppercase;
  font-size: 2rem;
`;

const Header = () => {
  return (
    <Div>
      <Navbar></Navbar>
      <Container>
        <Title>Industria Unican</Title>
      </Container>
    </Div>
  );
};

export default Header;
