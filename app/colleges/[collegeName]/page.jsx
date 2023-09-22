import CollegePageCard from '@/components/colleges/[collegeName]/CollegePageCard';

function getCollegeDetails(params) {
  const collegeName = params.collegeName;

  return {
      collegeName: "VIT Chennai",
      researchAreas: ["Machine Learning", "Distributed Computing", "Embedded Circuits"],
      collegeInfo: {
          about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin non diam ut justo bibendum vulputate. Suspendisse potenti. Nulla
          facilisi. Sed id purus at urna efficitur facilisis vel non dui. Fusce
          aliquet enim id nisi commodo, non tempus urna congue. Integer bibendum nulla
          nec urna auctor, sit amet euismod nunc pharetra. Sed in quam sit amet
          velit sagittis lacinia nec eget leo. Fusce non eleifend nisl.`,
          university: "VIT University,",
          projektaContact: "Dr. Rahul M",
      },
      coverImg: "/assets/projects/high-res-img.jpg",
  };
}

function getProjects(params) {
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

export default function CollegePage({params}) {
  let collegeDetails = getCollegeDetails(params);
  let projects = getProjects(params);
  return (
    <CollegePageCard
      collegeDetails={collegeDetails}
      projects={projects}
    />
  );
}
