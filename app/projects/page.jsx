import ProjectCard from "@/components/projects/ProjectCard";
import SearchBar from "@/components/SearchBar";

async function getProjects() {
  let res = await fetch(process.env.BACKEND_URL + "/projects", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Unable to fetch projects");
  }

  return res.json();
}

export default async function ProjectsPage() {
  let projects = await getProjects();

  return (
    <div className="flex flex-col gap-y-10">
      <div>
        <p className="font-sansita text-5xl">Projects</p>
      </div>
      <div>
        <SearchBar placeholder={"Search for projects..."} />
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.projectId} />
        ))}
      </div>
    </div>
  );
}
