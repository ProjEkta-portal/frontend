import ProjectPageCard from "@/components/users/[userId]/projects/[projectName]/ProjectPageCard";

async function getProject(userId, projectName) {
  console.log(
    process.env.BACKEND_URL + `/users/${userId}/projects/${projectName}`
  );

  let res = await fetch(
    process.env.BACKEND_URL + `/users/${userId}/projects/${projectName}`,
    {cache: "no-store"}
  );

  if (!res.ok) {
    throw new Error("Unable the fetch project");
  }

  return res.json();
}

export default async function UserProjectPage({params}) {
  let project = await getProject(params.userId, params.projectName);

  return <ProjectPageCard project={project} />;
}
