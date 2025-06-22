import React from "react";
import {
  Header,
  Footer,
  Hero,
  Services,
  DemoSites,
  About,
  Compare,
  Contact,
  GetStarted,
} from "./index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <DemoSites />
              <About />
              <Compare />
              <Contact />
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
