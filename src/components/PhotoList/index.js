import React, { useState } from "react";

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: "Horiseon",
      category: "portfolio",
      description: "Horiseon app",
      github: "https://github.com/KavyaMantena/Horiseon-Media-App",
      deployed: "https://kavyamantena.github.io/Horiseon-Media-App/",
    },
    {
      name: "runbuddy",
      category: "portfolio",
      description: "runbuddy app",
      github: "https://github.com/KavyaMantena/run-buddy",
      deployed: "https://kavyamantena.github.io/run-buddy/",
    },
    {
      name: "lifeandbudget",
      category: "portfolio",
      description: "lifeandbudget app",
      github: "https://github.com/KavyaMantena/LIfe-and-a-budget",
      deployed: "https://intense-forest-14268.herokuapp.com/",
    },
    {
      name: "gitinit",
      category: "portfolio",
      description: "gitinit app",
      github: "https://github.com/KavyaMantena/git-it-done",
      deployed: "https://kavyamantena.github.io/git-it-done/",
    },
    {
      name: "VacationVibes",
      category: "portfolio",
      description: "vacationvibes app",
      github: "https://github.com/KavyaMantena/Vacation-vibes",
      deployed: "https://peterwmcclelland.github.io/Vacation-vibes/",
    },
    {
      name: "WorkDayScheduler",
      category: "portfolio",
      description: "Work Day Scheduler app",
      github: "https://github.com/KavyaMantena/Work-Day-Scheduler",
      deployed: "https://kavyamantena.github.io/Work-Day-Scheduler/",
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <div>
            <a href={image.deployed}>
              <img
                src={require(`../../assets/images/${category}/screenshot${
                  i + 1
                }.png`)}
                alt={image.name}
                className="img-thumbnail mx-1 github-project"
                key={image.name}
              />
            </a>
            <a href={image.github}>{image.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
