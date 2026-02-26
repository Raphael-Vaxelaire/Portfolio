
import Acceuil from "@/components/Acceuil/Acceuil";
import styles from "@/components/Acceuil/acceuil.module.css";
import Competence from "@/components/Acceuil/competence";
// import styles_comp from "@/components/Acceuil/competence.module.css";
import { Gabarito400, Gabarito700 } from "@/fonts/fonts";
export default function acceuil() {
  return (
     <>
      
        <div className={`column flex-center ${Gabarito400.className} `}>
            
            <h2 className={`${Gabarito400.className}`}>Portfolio</h2>
            <h1 className={`${Gabarito400.className}`}>Raphael Vaxelaire</h1>
            <Acceuil />
            
        </div>
        <div> 
          <Competence />
        </div>

        
    </>
  )
}