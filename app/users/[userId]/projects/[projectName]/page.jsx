export default function UserProjectPage({params}) {
  return (
    <h1>
      Project page for the project {params.projectName} under the user{" "}
      {params.userId}
    </h1>
  );
}
