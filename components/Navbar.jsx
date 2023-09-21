"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import NextLink from "next/link";

import { SearchIcon } from "@/components/icons";

import logo from "@/public/assets/logo.png";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src={logo} width={50} height={50} alt="Logo" />
            <p className="font-bold text-inherit text-purple">Proj-एकता</p>
          </NextLink>
        </NavbarBrand>

        <NavbarItem className="flex">{searchInput}</NavbarItem>
        <NavbarItem className="ml-auto">
          <Button
            type="button"
            className="bg-orange rounded-md text-md w-10"
            onClick={() => {}}
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
