import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/client/header";
import Footer from "../components/client/footer";
import styled from "styled-components";

// Styled component

const Client = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Client;
