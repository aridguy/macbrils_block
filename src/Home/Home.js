import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Blog from "../Routes/Blogs/Blog";
import Footer from "../Components/Footer/Footer";
import Socials from "../Components/Socials/Socials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Blog />
      <Footer />
      <Socials />
    </div>
  );
};

export default Home;
