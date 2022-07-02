import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Portfolio(props) {
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter("Portfolio")}</h1>
      <h2>My projects</h2>
      <PhotoList category={"portfolio"} />
    </section>
  );
}
export default Portfolio;
