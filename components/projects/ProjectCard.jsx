"use client";

import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Chip,
} from "@nextui-org/react";

import {CollegeIcon, ContributorsIcon, StarsIcon} from "../icons";
import Link from "next/link";

export default function ProjectCard({project}) {
  return (
    <Card className="w-full rounded-none">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <Link href={`/users/${project.userId}/projects/${project.name}`}>
            <p className="text-lg font-inter font-bold">{project.name}</p>
          </Link>
          <div className="flex flex-row gap-x-2">
            <CollegeIcon />
            <Link href={`/colleges/${project.collegeId}`}>
              <p className="text-small">{project.collegeName}</p>
            </Link>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-y-2">
        <div className="flex flex-row gap-x-2">
          {project.tags.map((tag) => (
            <Chip
              radius="sm"
              variant="bordered"
              className="text-purple-700 border-purple-700 border-1 font-inter"
            >
              {tag}
            </Chip>
          ))}
        </div>
        <p className="font-inter line-clamp-2">{project.description}</p>
      </CardBody>
      <Divider />
      <CardFooter className="flex flex-row gap-x-7 items-center">
        <div className="flex flex-row gap-x-1 items-center">
          <StarsIcon />
          <p>{project.numStars}</p>
        </div>
        <div className="flex flex-row gap-x-1 items-center">
          <ContributorsIcon />
          <p>
            {project.numContributors +
              (project.numContributors > 1 ? " Contributors" : " Contributor")}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
