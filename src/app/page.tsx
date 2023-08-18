import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  const res = await fetch(
    "https://api.github.com/repos/bernardfernando/page-counter",
    { next: { revalidate: 10 } }
  );
  const data = await res.json();

  return <main>({data.stargazers_count})</main>;
}
