import BodyWr from "./body-wr";
import Home from "./home/home";
import AsideContact from "./asideContact";
// import { useState } from "react";
// import OfferDescr from "./home/offer-descr";
import React from "react";

function HomePage() {
  return (
    <>
      <BodyWr>
        <Home />
        <AsideContact />
      </BodyWr>
    </>
  );
}

export default HomePage;
