import Link from "next/link";

export default function F1Page() {
  return (
    <>
      <div>F1 Page</div>
      <div>
        <Link href={"/f1/f2"}>F2</Link>
      </div>
    </>
  );
}