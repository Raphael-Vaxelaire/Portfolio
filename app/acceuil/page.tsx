import Header from "@/components/Header";
import Acceuil from "@/components/Acceuil/Acceuil";
import styles from "@/components/Acceuil/acceuil.module.css";
import { Gabarito400, Gabarito700 } from "@/fonts/fonts";
export default function acceuil() {
  return (
     <>
      
      <main className={`${styles.haut} ${Gabarito700.className}`}>
        <Header />
        <div className={`column flex-center ${Gabarito400.className}`}>
            
            <h1 className={`${Gabarito400.className}`}>Portfolio</h1>
            <Acceuil />
            
        </div>
        

        
      </main>
      
    </>
  )
}