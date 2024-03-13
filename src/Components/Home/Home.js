import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousels/Carousel";
import MainLayout from "../Layout/MainLayout";

function Home() {
  return (
    <MainLayout>
      <Carousel />
    </MainLayout>
  );
}

export default Home;
