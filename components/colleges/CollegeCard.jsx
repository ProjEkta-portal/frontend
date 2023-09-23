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

import Link from "next/link";

import {CollegeIcon, ContributorsIcon, StarsIcon} from "../icons";

export default function CollegeCard({college}) {
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
          <Link href={`/colleges/${college.collegeId}`}>
            <p className="text-lg font-inter font-bold">{college.name}</p>
          </Link>

          <div className="flex flex-row gap-x-2">
            <p className="text-small">{college.state + ", " + college.city}</p>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-y-2">
        <p className="font-inter line-clamp-5">{college.description}</p>
      </CardBody>
      {/* <Divider />
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
      </CardFooter> */}
    </Card>
  );
}
