import Link from "next/link";
import React from "react";

export default function InterceptedF3() {
  return (
    <>
      <div>(.) Intercepted F3 page</div>
      <Link href={"/f1/f4"}>click F4</Link>
    </>
  );
}
