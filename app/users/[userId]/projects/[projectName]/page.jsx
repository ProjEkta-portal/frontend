"use client";
import { Image } from "@nextui-org/react";
import { ProjectPageCard } from "@/components/users/[userId]/projects/[projectName]/ProjectPageCard"

export default function UserProjectPage({params}) {
  return (
    <ProjectPageCard params={params} />
  );
}
