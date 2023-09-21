"use client";

import {Input} from "@nextui-org/react";
import {SearchIcon} from "./icons";

export default function SearchBar({placeholder}) {
  return (
    <div className="px-8 flex justify-center items-center">
      <Input
        label="Search"
        isClearable
        radius="lg"
        placeholder={placeholder}
        color="secondary"
        variant="bordered"
        startContent={<SearchIcon />}
      />
    </div>
  );
}
