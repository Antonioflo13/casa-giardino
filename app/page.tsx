"use client";
//STATE
import { useSelector } from "react-redux";
//INTERFACES
import { main } from "@/interfaces/main";
//FONT
import { Inter } from "@next/font/google";
//CSS
import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  //STATEe
  const main: main = useSelector(
    (state: { mainSlice: main }) => state.mainSlice
  );
  return (
    <main className={styles.main}>
      <div className="h-[100vh] w-full bg-main bg-cover bg-center mt-[64px] flex flex-col items-start justify-center">
        <section>
          <h1>{main.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: main.description }} />
        </section>
      </div>
    </main>
  );
}
