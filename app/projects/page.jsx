import ProjectCard from "@/components/projects/ProjectCard";
import SearchBar from "@/components/SearchBar";

async function getProjects() {
  return [
    {
      userId: "Rahul-7323",
      name: "FlashCardApp",
      collegeName: "VIT Chennai",
      tags: ["Flask", "Vue", "Redis"],
      description:
        "An application which implements flashcards for memory training.",
      numStars: 7,
      numContributors: 1,
    },
    {
      userId: "Rahul-7323",
      name: "Object-Detection-System-RPi",
      collegeName: "IIT Madras",
      tags: ["TensorFlow", "Express", "MongoDB", "React"],
      description:
        "A system which uses raspberry pi 4 for object detection and an accompanying web app for displaying the data.",
      numStars: 7,
      numContributors: 2,
    },
    {
      userId: "Rahul-7323",
      name: "FFCS-REST-API",
      collegeName: "Delhi Technological Institute",
      tags: ["Prisma", "Express", "PostgreSQL"],
      description:
        "FFCS REST API is a REST API that implements the Fully Flexible Credit System of VIT where students can register for courses for a semester by choosing the faculties and slots according to their convenience.",
      numStars: 7,
      numContributors: 2,
    },
    {
      userId: "Rahul-7323",
      name: "FlashCardApp",
      collegeName: "VIT Chennai",
      tags: ["Flask", "Vue", "Redis"],
      description:
        "An application which implements flashcards for memory training.",
      numStars: 7,
      numContributors: 1,
    },
    {
      userId: "Rahul-7323",
      name: "Object-Detection-System-RPi",
      collegeName: "IIT Madras",
      tags: ["TensorFlow", "Express", "MongoDB", "React"],
      description:
        "A system which uses raspberry pi 4 for object detection and an accompanying web app for displaying the data.",
      numStars: 7,
      numContributors: 2,
    },
    {
      userId: "Rahul-7323",
      name: "FFCS-REST-API",
      collegeName: "Delhi Technological Institute",
      tags: ["Prisma", "Express", "PostgreSQL"],
      description:
        "FFCS REST API is a REST API that implements the Fully Flexible Credit System of VIT where students can register for courses for a semester by choosing the faculties and slots according to their convenience.",
      numStars: 7,
      numContributors: 2,
    },
  ];
}

export default async function ProjectsPage() {
  let projects = await getProjects();

  return (
    <div className="flex flex-col gap-y-20">
      <div>
        <SearchBar placeholder={"Search for projects..."} />
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
