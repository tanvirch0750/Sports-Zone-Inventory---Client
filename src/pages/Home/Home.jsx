import React from "react";
import Banner from "../../components/Banner/Banner";
import CeoQuotes from "../../components/CeoQuotes/CeoQuotes";
import Features from "../../components/Features/Features";
import InventoryItems from "../../components/InventoryItems/InventoryItems";

const Home = () => {
  return (
    <>
      <Banner />
      <CeoQuotes />
      <Features />
      <InventoryItems />
    </>
  );
};

export default Home;
