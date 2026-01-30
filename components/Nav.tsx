"use client";
 
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { useEffect } from "react";
 import styles from "@/components/Acceuil/acceuil.module.css";
export default function Nav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
 
  useEffect(() => {
    console.log(searchParams.get("v"));
  }, [searchParams]);
 
  return (
    <div className={`flex-center`}>
    <nav>
      {/* <Link
        href="/mon-compte?v=2"
        className={clsx("", {
          active: pathname === "/mon-compte",
        })}
      >
        Mon compte
      </Link> */}
      <Link
        href="/acceuil"
        className={clsx("", {
          active: pathname === "/acceuil",
        })}
      >
        Acceuil
      </Link>
            <Link
        href="/projects"
        className={clsx("", {
          active: pathname === "/projects",
        })}
      >
        Projects
      </Link>
            <Link
        href="/contact"
        className={clsx("", {
          active: pathname === "/contact",
        })}
      >
        Contact
      </Link>
    </nav>
    </div>
  );
}