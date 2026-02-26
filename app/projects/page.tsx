import Link from "next/link";
import { projects } from "@/data/projects";
import styles from "@/components/Project/projects.module.css";
import { Gabarito400, Gabarito700 } from "@/fonts/fonts";

export default function ProjectsPage() {
  return (
    <div className={`${styles.haut} ${Gabarito700.className}`}>

      <div className={`${styles.container} ${Gabarito400.className}`}>
        <h1 className={styles.title}>Mes projets</h1>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.slug} className={styles.card}>
              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>

                <p className={styles.techno}>{project.techno}</p>

                <Link
                  href={`/projects/infos/${project.slug}`}
                  className={styles.ens}
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}