import Image from "next/image";
import Link from "next/link";
import { RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri";

export function Footer() {
  return (
    <footer className="bg-yellow-400 py-4">
      <div className="container flex flex-1 justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            width={192 / 1.8}
            height={130}
            alt="JeryanneJane.me"
          />
        </Link>
        <div className="flex flex-col items-center justify-center gap-4 text-xs">
          <nav className="flex gap-4">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms and Conditions</Link>
          </nav>
          <p className="text-xs">Jeryanne Jane © {new Date().getFullYear()}</p>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            href="https://www.facebook.com/profile.php?id=61561595651894"
            target="_blank"
          >
            <RiFacebookCircleFill size={24} />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61561595651894"
            target="_blank"
          >
            <RiInstagramFill size={24} />
          </Link>
        </nav>
      </div>
    </footer>
  );
}
