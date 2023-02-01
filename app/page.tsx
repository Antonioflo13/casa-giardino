//FONT
import { Inter } from "@next/font/google";
//CSS
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className={styles.main}></main>;
}
