import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  const [categories] = useState([
    { name: "About me", description: "About me" },
    { name: "Portfolio", description: "My projects" },
    { name: "Contact Me", description: "Contact me" },
    { name: "Resume", description: "Resume" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav>
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      </Nav>
      <main>
        <About></About>
        <Portfolio currentCategory={currentCategory}></Portfolio>
      </main>
    </div>
  );
}

export default App;
