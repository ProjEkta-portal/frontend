"use client";
import { Image, Chip } from "@nextui-org/react";

export function ProjectPageCard({params}) {
    
    const about = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Proin non diam ut justo bibendum vulputate. Suspendisse potenti. Nulla
    facilisi. Sed id purus at urna efficitur facilisis vel non dui. Fusce
    aliquet enim id nisi commodo, non tempus urna congue. Integer bibendum nulla
    nec urna auctor, sit amet euismod nunc pharetra. Sed in quam sit amet
    velit sagittis lacinia nec eget leo. Fusce non eleifend nisl.`
  
    const futureWork = `In the future, there are several exciting possibilities
    for expanding and improving this project. Some potential areas of focus
    include:
    1. abcscs dvnpienveio vioehuveubveobveobvoebvbeobv wovbwobvoebvoe
    2. aohdoaho shvonwovn vwovnwrnhvonwvbebvev vevbieo
    3. shf9wncw vhsohviobeoiv evbeobvoiehoi wohowhcihiwohiof
    4. ancowhcow ihcoiwhoicwiiowiocjiowjciojwiovjiowa
    5. ancowhcow ihcoiwhoicwiiowiocjiowjciojwiovjiowa
    6. ancowhcow ihcoiwhoicwiiowiocjiowjciojwiovjiowa
    7. ancowhcow ihcoiwhoicwiiowiocjiowjciojwiovjiowa
    8. ancowhcow ihcoiwhoicwiiowiocjiowjciojwiovjiowa
    9. ancowhcow ihcoiwhoicwiiowiocjiowjciojwiovjiowa
    {\n}
    ancowhcow ihcoiwhoicwiiowiocjiowjciojwiovjiowa
    ancowhcow ihcoiwhoicwiiowiocjiowjciojwiovjiowa
    ancowhcow ihcoiwhoicwiiowiocjiowjciojwiovjiowa
    ancowhcow ihcoiwhoicwiiowiocjiowjciojwiovjiowaancowhcow
    ihcoiwhoicwiiowiocjiowjciojwiovjiowa
    ancowhcow ihcoiwhoicwiiowiocjiowjciojwiovjiowa
    ancowhcow ihcoiwhoicwiiowiocjiowjciojwiovjiowa
    ancowhcow ihcoiwhoicwiiowiocjiowjciojwiovjiowa
    ancowhcow ihcoiwhoicwiiowiocjiowjciojwiovjiowa
    ancowhcow ihcoiwhoicwiiowiocjiowjciojwiovjiowa
    `
  
    const projTitle = "The Global Energy Challenge";
    const coverImg = "/assets/projects/high-res-img.jpg"
    const Details = {
      "About": about,
      "Future work": futureWork,
    };

    const project = {
      "Project Title": projTitle,
      "Cover Image": coverImg,
      "Details": Details,
      "Tags": ["Energy", "Climate Change", "Sustainability"],
    }
  
    return (
      <div className="relative m-4 max-h-[48rem] rounded-lg overflow-auto">
        <div className="relative bg-orange bg-opacity-40 flex-row flex rounded-t-lg">
          <div className="flex flex-col w-full md:w-3/5">
            <h1 className="relative w-full head-text p-20 pt-44 z-0">{project["Project Title"]}</h1>
          </div>
          <div className="relative flex-col hidden md:w-2/5 md:block">
            <div className="absolute z-10 -bottom-24 right-10">
              <Image className="mt-24 mb-10 h-80 w-80" src={project["Cover Image"]} alt="Project Image"/>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col bg-gray rounded-b-lg">
        <div className="flex flex-row p-10 pb-4 justify-start">
          {project["Tags"].map((tag) => (
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
              {Object.entries(project["Details"]).map(([key, value]) => (
                <tr className="w-[80%]">
                  <td className="pr-20 text-s font-bold items-center">{key}</td>
                  <td className="body-text">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }