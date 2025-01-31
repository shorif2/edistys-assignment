import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h2>Hello World</h2>
      <Link href="/demo">Go to Demo Page</Link>
    </div>
  );
}
