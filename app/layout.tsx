import "./globals.css";
import Header from "@/components/Header";
import { Gabarito400, Gabarito700 } from "@/fonts/fonts";
import styles from "@/components/layout.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${Gabarito400.className} ${Gabarito700.className} ${styles.body}`}>
        <Header />
        
        <main className={styles.main}>
          {children}
        </main>

        <footer className={styles.footer}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Raphael Vaxelaire. Tous droits réservés.
          </p>

          <div className={styles.socials}>
            <a
              href="https://github.com/Raphael-Vaxelaire"
              target="_blank"
              className={styles.icon}
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/raphael-vaxelaire-5b3861293/"
              target="_blank"
              className={styles.icon}
            >
              <FaLinkedin />
            </a>
          </div>
        </footer>

      </body>
    </html>
  );
}