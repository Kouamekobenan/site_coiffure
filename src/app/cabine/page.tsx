"use client";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import MaCabine from "../components/cabine/page";
import Footer from "../components/footer/footer";

export default function Page() {
  return (
    <div className="">
      <div className="">
        <Navbar  />
      </div>
      <div className="">
        <MaCabine />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
