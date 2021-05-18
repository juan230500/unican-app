import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import headerBg from "../assets/headerBg.jpg";

const Div = styled.div`
  height: 480px;

  background-image: url(${headerBg});
  background-size: auto 250%;
  background-position: top;
`;

const Container = styled.div`
  padding: 96px 48px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${COLORS.black};
  font-size: 3rem;
  font-weight: normal;
  width: 50%;
  margin: auto 0;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: 24px;
`;

const Header = () => {
  return (
    <Div>
      <Container>
        <Title>Industria de plásticos número 1 de centroamérica</Title>
      </Container>
    </Div>
  );
};

export default Header;
