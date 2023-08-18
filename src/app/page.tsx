import kv from "@vercel/kv";
import Link from "next/link";

export default async function Home() {
  const res = await fetch(
    "https://api.github.com/repos/bernardfernando/page-counter",
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  const pageViews = await kv.incr("mypageviews");

  //make the number get bigger for each view
  const myStyles = {
    p: {
      fontSize: pageViews / 10 + "px",
    },
  };

  return (
    <main>
      <p style={myStyles.p}>{pageViews}</p>
      <Link
        href="https://github.com/bernardfernando/page-counter"
        target="_blank"
      ></Link>
      <span>{data.stargazers_count}</span>
    </main>
  );
}
