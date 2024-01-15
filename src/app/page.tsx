import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>My Tasks App</h1>
      <div className="flex gap-3 m-6 ">
        <Link
          href="/tasks"
          className="bg-blue-400 p-2 rounded w-40 hover:bg-blue-600"
        >
          Tasks
        </Link>
        <Link
          href="/list"
          className="bg-blue-400 p-2 rounded w-40  hover:bg-blue-600"
        >
          List
        </Link>
      </div>
    </div>
  );
}
