import React from "react";
import Header from "./components/Header.tsx"
import About from "./components/About.tsx"
import Hero from "./components/Hero.tsx"
import Contact from "./components/Contact.tsx"
import Experience from "./components/Experience.tsx"
import Footer from "./components/Footer.tsx"
import "./App.css"

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
     <Header/>
   
 
       <About/>
   
     

     <Footer/>
    </div>
  );
};

export default App;
