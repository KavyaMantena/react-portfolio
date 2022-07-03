import React from "react";

function About() {
  return (
    <section>
      <h1 id="about">Who am I?</h1>
      <div className="about-page">
        <img
          src={require(`../../assets/Myphoto/img_photo.jpeg`)}
          alt="myimage"
          className="my-image"
        ></img>
        <div className="about-p">
          Howdy, I am Kavya, a dentist by profession, born in India, raised in
          India and California, and moved to Austin when I married the love of
          my life. Aspiring to become a web developer, I have stepped into this
          new career path. Eager to learn and grow higher and higher in this new
          technology field. I love to cook, play badminton, binge-watch Netflix
          series, and of course, who doesn't love to spend time with their
          family. Check out my portfolio and contact me for more information
        </div>
      </div>
    </section>
  );
}

export default About;
