"use client";
import {Image, Chip} from "@nextui-org/react";
import ProjectCard from "@/components/projects/ProjectCard";

export default function CollegePageCard({college, projects}) {
  return (
    <div className="relative m-4 max-h-[48rem] rounded-lg overflow-auto">
      <div className="relative bg-orange bg-opacity-40 flex-row flex rounded-t-lg">
        <div className="flex flex-col w-full md:w-3/5">
          <h1 className="relative w-full head-text p-20 pt-44 z-0">
            {college.name}
          </h1>
        </div>
        <div className="relative flex-col hidden md:w-2/5 md:block">
          <div className="absolute z-10 -bottom-24 right-10">
            <Image
              className="mt-24 mb-10 h-80 w-80"
              src={"/assets/projects/high-res-img.jpg"}
              alt="Project Image"
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col bg-gray rounded-b-lg">
        <div className="flex flex-row p-10 pb-4 justify-start">
          {college.researchAreas.map((tag) => (
            <Chip
              radius="sm"
              variant="bordered"
              className="text-purple-700 border-purple-700 m-4 border-1 font-inter"
            >
              {tag}
            </Chip>
          ))}
        </div>
        <table className="mt-16 p-5 border-separate border-spacing-y-10 flex flex-col items-center">
          <tbody className="p-4">
            <tr className="w-[80%]">
              <td className="pr-20 text-xl font-bold items-center">
                Description
              </td>
              <td className="body-text">{college.description}</td>
            </tr>
          </tbody>
        </table>
        <div className="p-4 grid md:grid-cols-2 sm:grid-cols-1 gap-10">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
