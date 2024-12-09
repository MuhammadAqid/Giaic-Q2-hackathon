"use client"
import Image from "next/image";
import Header from "./components/header/header";
import Hero from "@/app/components/hero/hero"
import Browse from "./components/browse/browse";
import Products from "./components/products/products";
import Room from './components/rooms/room'
import Furniture from "./components/furniture/furniture";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <Browse/>
      <Products/>
      <Room />
      <Furniture />
      <Footer />
    </div>
  );
}

