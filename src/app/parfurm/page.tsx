import React from "react";
import Navbar from "../components/navbar/Navbar";
import ParfumSale from "../components/parfurm/page";
import Footer from "../components/footer/footer";

export default function page() {
  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <ParfumSale />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
