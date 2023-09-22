import CollegeCard from "@/components/colleges/CollegeCard";
import SearchBar from "@/components/SearchBar";

async function getColleges() {
  return [
    {
      name: "VIT Chennai",
      state: "Tamil Nadu",
      city: "Chennai",
      description:
        "VIT Chennai, one of the leading engineering colleges in India, offers the best exposure in terms of world class education, internship opportunities, top-notch placement opportunities, and infrastructural amenities. We ensure that the graduates walk out with many skills and learning. We provide a domain for polishing technical mastery and interpretive and analytical skills, which is the need of the hour.",
    },
    {
      name: "NIT Trichy",
      state: "Tamil Nadu",
      city: "Trichy",
      description:
        "The National Institute of Technology Tiruchirappalli is a national research deemed university near the city of Tiruchirappalli in Tamil Nadu, India. It was founded as Regional Engineering College Tiruchirappalli in 1964 by the governments of India and Tamil Nadu under the affiliation of the University of Madras.",
    },
    {
      name: "IIT Bombay",
      state: "Maharashtra",
      city: "Mumbai",
      description:
        "The Indian Institute of Technology Bombay is a public research university and technical institute in Powai, Mumbai, Maharashtra, India. IIT Bombay is the topmost preferred choice for Indian students in STEM fields such as computer science and engineering. IIT Bombay was founded in 1958.",
    },
    {
      name: "VIT Chennai",
      state: "Tamil Nadu",
      city: "Chennai",
      description:
        "VIT Chennai, one of the leading engineering colleges in India, offers the best exposure in terms of world class education, internship opportunities, top-notch placement opportunities, and infrastructural amenities. We ensure that the graduates walk out with many skills and learning. We provide a domain for polishing technical mastery and interpretive and analytical skills, which is the need of the hour.",
    },
    {
      name: "NIT Trichy",
      state: "Tamil Nadu",
      city: "Trichy",
      description:
        "The National Institute of Technology Tiruchirappalli is a national research deemed university near the city of Tiruchirappalli in Tamil Nadu, India. It was founded as Regional Engineering College Tiruchirappalli in 1964 by the governments of India and Tamil Nadu under the affiliation of the University of Madras.",
    },
    {
      name: "IIT Bombay",
      state: "Maharashtra",
      city: "Mumbai",
      description:
        "The Indian Institute of Technology Bombay is a public research university and technical institute in Powai, Mumbai, Maharashtra, India. IIT Bombay is the topmost preferred choice for Indian students in STEM fields such as computer science and engineering. IIT Bombay was founded in 1958.",
    },
  ];
}

export default async function CollegesPage() {
  let colleges = await getColleges();

  return (
    <div className="flex flex-col gap-y-10">
      <div>
        <p className="font-sansita text-5xl">Colleges</p>
      </div>
      <div>
        <SearchBar placeholder={"Search for colleges..."} />
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
        {colleges.map((college) => (
          <CollegeCard college={college} />
        ))}
      </div>
    </div>
  );
}
