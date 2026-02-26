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
            <p>Lorem ipsum dolor sit amet. At expedita voluptate eos reprehenderit itaque eos incidunt impedit aut rerum beatae qui soluta architecto et nihil exercitationem. Aut nostrum harum ad beatae totam At reiciendis libero ea molestiae alias et officiis repellat. Aut tenetur beatae a voluptas nihil et harum nostrum qui nisi reprehenderit hic provident consequatur aut obcaecati placeat eos quibusdam laudantium</p>
            <p>Lorem ipsum dolor sit amet. At expedita voluptate eos reprehenderit itaque eos incidunt impedit aut rerum beatae qui soluta architecto et nihil exercitationem. Aut nostrum harum ad beatae totam At reiciendis libero ea molestiae alias et officiis repellat. Aut tenetur beatae a voluptas nihil et harum nostrum qui nisi reprehenderit hic provident consequatur aut obcaecati placeat eos quibusdam laudantium. 
              Aut laboriosam rerum non similique obcaecati et veniam autem et quisquam blanditiis in perspiciatis rerum ut omnis dolore cum quod eius. Qui accusamus odio sit amet dolores et numquam quisquam et quidem voluptatem. Ut laudantium aspernatur et deserunt sint ut maxime consectetur sit iusto corporis. Et ducimus omnis et molestiae labore qui sapiente rerum ut consequatur magni aut quis iure vel ipsam reprehenderit aut officia minus.</p>
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