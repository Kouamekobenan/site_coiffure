"use client";
import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/footer";
import { MaCabine } from "../components/cabine/page";

export default function page() {
  return (
    <div className="">
      <div className="">
        <Navbar />
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
