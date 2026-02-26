import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { Gabarito400, Gabarito700 } from "@/fonts/fonts";
import styles from "@/components/Project/infos.module.css";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
      
    <div className={`${styles.main} `}>
      <div className={`${styles.wrapper} ${Gabarito400.className} ${styles.page} `}>

        <div className={styles.videoSide}>
          {project.video && (
            <video
              className={styles.video}
              controls
              autoPlay
              muted
              loop
            >
              <source src={project.video} type="video/mp4" />
            </video>
          )}
        </div>

        <div className={styles.infoSide}>
          <h1 className={styles.title}>{project.title}</h1>

          <p className={styles.description}>{project.description}</p>

          <h3 className={styles.subtitle}>Présentation</h3>
          <p className={styles.text}>{project.content}</p>

          <h3 className={styles.subtitle}>Technologies</h3>
          <p className={styles.tech}>{project.techno}</p>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className={styles.github}
            >
              Voir le code GitHub
            </a>
          )}
        </div>

      </div>
</div>
  );
}