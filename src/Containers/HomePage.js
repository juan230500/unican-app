import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";

import styled from "styled-components";
import Navbar from "../Components/UI/Navbar/Navbar";

const Div = styled.div``;

const HomePage = () => {
  const [top, setTop] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setTop(window.pageYOffset < 20);
    });
  }, []);
  return (
    <Div>
      <Navbar transparent={top}></Navbar>
      <Header></Header>
    </Div>
  );
};

export default HomePage;
