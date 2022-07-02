import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Portfolio(props) {
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter("Portfolio")}</h1>
      <p>My Projects</p>
      <PhotoList category={"portfolio"} />
    </section>
  );
}
export default Portfolio;
