import CollegeCard from "@/components/colleges/CollegeCard";
import SearchBar from "@/components/SearchBar";

async function getColleges() {
  const res = await fetch(process.env.BACKEND_URL + "/colleges", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Unable to fetch colleges");
  }

  return res.json();
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
          <CollegeCard college={college} key={college.collegeId} />
        ))}
      </div>
    </div>
  );
}
