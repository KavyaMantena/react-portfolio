import React from "react";

function Resume() {
  return (
    <section>
      <h1>Resume</h1>
      <div>
        <div>Download Resume</div>
        <h2>Front-end Proficiencies</h2>
        <ul className="resume-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>jQuery</li>
          <li>Responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div>
        <h2>Back-end Proficiencies</h2>
        <ul className="resume-list">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQl</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
