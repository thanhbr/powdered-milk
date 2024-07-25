import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="p-4">
      <nav>
        <Link href="/" className="flex center gap-2">
          <Image src="/icons/logo.svg" alt="logo" width={30} height={40} />
          <Image src="/icons/logo-name.svg" alt="logo-name" width={70} height={70} />
        </Link>
      </nav>
    </header>
  );
}
