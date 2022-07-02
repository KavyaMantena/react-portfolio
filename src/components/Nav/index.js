import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const categories = [
    { name: "About me", description: "About me" },
    { name: "Portfolio", description: "My projects" },
    { name: "Contact Me", description: "Contact me" },
    { name: "Resume", description: "Resume" },
  ];

  const handleClick = () => {
    console.log("click handled");
  };

  return (
    <header className="flex-row px-1">
      <h2>Kavya Mantena</h2>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li key={category.name}>
              <span
                onClick={() => {
                  handleClick();
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
