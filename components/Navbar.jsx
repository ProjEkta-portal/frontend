"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import {
  Button,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import NextLink from "next/link";
import { SearchIcon } from "@/components/icons";
import logo from "@/public/assets/logo.png";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { useState } from "react";

export const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setLogin] = useState(true);
  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Colleges",
      href: "/colleges",
    },
  ];
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
      {/* <NavbarContent className="basis-1/5 sm:basis-full" justify="start"> */}
      <NavbarBrand as="li" className="gap-3 max-w-fit">
        <NextLink className="flex justify-start items-center gap-1" href="/">
          <Image src={logo} width={50} height={50} alt="Logo" />
          <p className="font-bold text-inherit text-purple">Proj-एकता</p>
        </NextLink>
      </NavbarBrand>
      <NavbarContent className="flex m-auto" justify="center">
        <ul className="hidden lg:flex gap-4 justify-center ml-2 m-auto">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent>
        <NavbarItem className="flex md: ml-auto">{searchInput}</NavbarItem>
        {/* <NavbarContent as="div" justify="end"> */}
        {isLoggedIn ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <NavbarItem>
            <Button
              type="button"
              className="bg-orange rounded-md text-md w-10"
              onClick={() => {
                router.push("/login");
              }}
            >
              LOGIN
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
      {/* </NavbarContent> */}
    </NextUINavbar>
  );
};
