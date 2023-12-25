import { Slider } from "../components/Slider";
import React from "react";
import { Announcements } from "../components/Announcements";
import { Navbar } from "../components/Navbar";
import Categories from "../components/Categories";
import Banner from "../components/Banner";
import Products from "../components/Products";
import Product from "../components/Product";
import {Slider2} from "../components/Slider2";
import Footer from "../components/Footer";
import Accesories from "../components/Accessories";
 const Home = () => {
  return (
    <div className="container">
      <Announcements />
      <Navbar />
      <Slider />
      <Banner />
      <Categories />
      <Accesories/>
      <Products />
      <Slider2></Slider2>
      <Footer />
    </div>
  );
};
export default Home;

