import Link from "next/link";
import { getDataObjects } from "./lib/data";

export default async function Home() {
  const data = await getDataObjects();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>This is the starter project</div>
      <Link href="/add" passHref>
        <button type="button">Add</button>
      </Link>
      <div>{JSON.stringify(data)}</div>
    </main>
  );
}
