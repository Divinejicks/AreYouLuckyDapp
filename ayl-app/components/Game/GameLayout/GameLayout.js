import React from "react";
import Footer from "../../Layout/Footer";
import GameHeader from "./GameHeader";

const GameLayout = ({ children }) => {
  return (
    <>
      <GameHeader />
      {children}
      <Footer />
    </>
  );
};

export default GameLayout;
