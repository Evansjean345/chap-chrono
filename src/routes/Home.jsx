import React from "react";
import Hero from "../components/Hero";
import Navbar from "../layouts/Navbar";
import homeIMG from "../bg.svg";
import Card from "../components/Card";
import ContentOne from "../components/ContentOne";
import Partner from "../components/Partner";
import ContentTwo from "../components/ContentTwo";
import ContentThree from "../components/ContentThree";
import Footer from "../layouts/Footer";
import AppFooter from "../layouts/AppFooter";

export default function Home() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${homeIMG})`,
        }}
        className="bg-cover bg-no-repeat"
      >
        <Navbar />
        <Hero />
      </section>
      <Card />
      <ContentOne />
      <Partner />
      <ContentTwo />
      <ContentThree />
      <Footer/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
       <br className="supp"/>
      <AppFooter/>
    </>
  );
}
