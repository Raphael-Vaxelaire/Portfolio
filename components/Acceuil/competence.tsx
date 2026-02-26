"use client";
 
import Image from "next/image";
import styles from "./competence.module.css";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
export default function Competence() {
   const pathname = usePathname();
  return (
    <div className={styles.competence}>
        <h3 className={styles.competence_titre}>Compétences</h3>
        <div className={styles.language}>
        <Image
          src="/image/CSS.png"
          width={200}
          height={200}
          alt="Image test"
          className={styles.moi}
          />          
          <Image
          src="/image/HTML.png"
          width={200}
          height={200}
          alt="Image test"
          className={styles.moi}
          />          
          <Image
          src="/image/JS.png"
          width={200}
          height={200}
          alt="Image test"
          className={styles.moi}
          />
        </div>
         <div className={styles.language2}>
        <Image
          src="/image/PHP.png"
          width={200}
          height={200}
          alt="Image test"
          className={styles.moi}
          />          
          <Image
          src="/image/wordpress.webp"
          width={200}
          height={200}
          alt="Image test"
          className={styles.moi}
          />          
          <Image
          src="/image/vite.png"
          width={200}
          height={200}
          alt="Image test"
          className={styles.moi}
          />
        </div>
        <h3 className={styles.int} >Intéressé ?</h3>
        <div className={styles.naviguer}>
          
        <Link
        href="/projects"
        className={styles.btn}
      >
        Projects →
      </Link>
        <Link
        href="/contact"
        className={styles.btn}
      >
        Contact →
      </Link>
      </div>
    </div>
    
  );
}