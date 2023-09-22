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

export default function CollegePage({params}) {
  let collegeDetails = getCollegeDetails(params);

  return (
    <CollegePageCard
      collegeDetails={collegeDetails}
    />
  );
}
