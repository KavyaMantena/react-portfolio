import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [categories] = useState([
    { name: "About Me", description: "About Me" },
    { name: "Portfolio", description: "Portfolio" },
    { name: "Contact", description: "Contact me" },
    { name: "Resume", description: "Resume" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main className="main-style">
        {currentCategory.name === "About Me" && <About />}
        {currentCategory.name === "Portfolio" && <Portfolio></Portfolio>}
        {currentCategory.name === "Contact" && <ContactForm />}
        {currentCategory.name === "Resume" && <Resume />}
        {/* {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )} */}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
