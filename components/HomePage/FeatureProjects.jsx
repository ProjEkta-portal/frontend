import React from "react";
import ProjectCard from "./ProjectCard";
const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      img: "/assets/projects/project-1.png",
      title: "Quantum Comuting Exploration",
      institute: "Vellore Institute of Technology",
      domain: ["Quantum Comuting", "Research Algorithms", "Physics"],
      description:
        "Explore the fascinating world of quantum computing with our team's research into quantum algorithms and applications...",
      ratings: "2.5k",
      contributors: 4,
    },
    {
      id: 2,
      img: "/assets/projects/project-2.png",
      title: "Quantum Comuting Exploration",
      institute: "Vellore Institute of Technology",
      domain: ["Quantum Comuting", "Research Algorithms", "Physics"],
      description:
        "Explore the fascinating world of quantum computing with our team's research into quantum algorithms and applications...",
      ratings: "2.5k",
      contributors: 4,
    },
    {
      id: 3,
      img: "/assets/projects/project-3.png",
      title: "Quantum Comuting Exploration",
      institute: "Vellore Institute of Technology",
      domain: ["Quantum Comuting", "Research Algorithms", "Physics"],
      description:
        "Explore the fascinating world of quantum computing with our team's research into quantum algorithms and applications...",
      ratings: "2.5k",
      contributors: 4,
    },
    {
      id: 4,
      img: "/assets/projects/project-4.png",
      title: "Quantum Comuting Exploration",
      institute: "Vellore Institute of Technology",
      domain: ["Quantum Comuting", "Research Algorithms", "Physics"],
      description:
        "Explore the fascinating world of quantum computing with our team's research into quantum algorithms and applications...",
      ratings: "2.5k",
      contributors: 4,
    },
  ];

  return (
    <section>
      <h1 className="head-text">FEATURED PROJECTS</h1>

      <div className="container max-auto">
        <div className="grid md:grid-cols-2 grid-cols-1">
          {projects.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
