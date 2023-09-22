"use client";

import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Progress,
} from "@nextui-org/react";

import {FaUniversity, FaUserFriends} from "react-icons/fa";
import {GiAchievement} from "react-icons/gi";

export default function ProjectCard(props) {
  const data = props.data;
  const colors = ["#FFFBD4", "#DEE0FF", "#FFD4D4", "#D4FFED"];
  const color = colors[data.id % 4];

  return (
    <Card
      className={`border-none !bg-[${color}] max-w-[500px] p-1 my-3`}
      shadow="sm"
      onPress={() => {
        console.log("Card Pressed");
      }}
    >
      <CardHeader className="pb-0 pt-2 px-4 flex">
        <Image src={data.img} alt="Project Image" width={50} height={50} />
        <div className="pl-2 ">
          <h3 className="font-bold ml-0 flex-start">{data.title}</h3>
          <p className="text-xs flex">
            <FaUniversity size="1rem" className="mr-1" />
            {data.institute.toUpperCase()}
          </p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex flex-wrap gap-x-3">
          {data.domain.map((item) => (
            <Button color="primary" variant="bordered" key={data.id}>
              {item}
            </Button>
          ))}
        </div>
        <p className="text-sm pt-4">{data.description}</p>
      </CardBody>
      <CardFooter>
        <div className="flex">
          <span className="flex">
            <GiAchievement className="mt-1" />
            {data.ratings}
          </span>
          <span className="flex ml-2">
            <FaUserFriends className="mt-1 mr-1" />
            {data.contributors} Contributors
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
