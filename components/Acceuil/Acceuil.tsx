"use client";
 
import Image from "next/image";
import styles from "./acceuil.module.css";
import { useState } from "react";

export default function Acceuil() {
  return (
    
    <div className={styles.flex}>
      <div className={styles.bulle}>
        
          <div className={styles.img}> 
          <Image
          src="/image/moi.png"
          width={200}
          height={200}
          alt="Image test"
          className={styles.moi}
          />
          </div>
          <div className={styles.texte}>
             <p>
            Je m'appelle Raphael Vaxelaire et je suis passionné par le
            développement web et la création d'expériences numériques
            engageantes. Depuis mes débuts, j'ai exploré différents frameworks
            et technologies, allant de Next.js à PHP, en passant par Vue et
            Tailwind, afin de construire des projets à la fois fonctionnels et
            esthétiques. Mon objectif est toujours de combiner performance,
            design et ergonomie pour offrir des solutions complètes et
            professionnelles. J'aime relever des défis techniques, apprendre de
            nouvelles pratiques et expérimenter avec des outils modernes pour
            améliorer mes compétences et mes projets.
          
            Je suis particulièrement intéressé par le développement frontend,
            le design d'interfaces intuitives et l'optimisation SEO, tout en
            gardant une approche pragmatique de la gestion des données et de
            l'architecture des projets. Mon parcours m'a permis de travailler
            sur des projets variés : sites vitrines, applications interactives
            et projets intégrant des API externes comme celles de Riot ou
            Resend. Ces expériences m'ont appris l'importance de la rigueur, de
            la planification et de la maintenance du code sur le long terme.
          </p>

          <p>
            Au-delà du développement, j'accorde une grande importance à
            l'apprentissage continu et au partage de connaissances. Je suis
            motivé par la résolution de problèmes complexes et par la création
            de solutions innovantes qui apportent une réelle valeur aux
            utilisateurs. Curieux et persévérant, je cherche constamment à
            améliorer mes compétences techniques tout en développant mon sens
            du design et de l'expérience utilisateur. Mon ambition est de
            participer à des projets stimulants qui me permettent de croiser
            créativité et technologie, et de construire des expériences web
            mémorables et performantes pour tous.
          </p>
         </div>
        </div>

        <div className={styles.download_zone}>

          <div className={styles.question}>
            <Image
              src="/image/question.png"
              width={200}
              height={200}
              alt="question"
              className={styles.inter}
            />
          </div>

          <a
            className={styles.question_texte}
            href="/image/CV alternance.pdf"
            download="CV.pdf"
          >
            Télécharger mon CV
          </a>

        </div>
        
    </div>
    
  );  
}