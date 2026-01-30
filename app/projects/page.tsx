"use client";
import Header from "@/components/Header";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { useEffect } from "react";
export default function Projets() {

   const pathname = usePathname();
  const searchParams = useSearchParams();
 
  useEffect(() => {
    console.log(searchParams.get("v"));
  }, [searchParams]);
 
  return (
     <>
      <Header />

      <Link
        href="/projects/infos/1"
        className={clsx("", {
          active: pathname === "/projects/infos",
        })}
      >
        projet 1
      </Link>
            <Link
        href="/projects/infos/2"
        className={clsx("", {
          active: pathname === "/projects/infos",
        })}
      >
        projet 2
      </Link>
    </>
  )





}