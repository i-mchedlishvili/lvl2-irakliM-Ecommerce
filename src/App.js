import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/Sidebar/SideBar";
import FooterTop from "./components/FooterTop";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <SideBar />
      <FooterTop />
      <Footer />
    </>
  );
}

export default App;
