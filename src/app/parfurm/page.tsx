import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/footer";
import { ParfumSale } from "../components/parfurm/page";
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
