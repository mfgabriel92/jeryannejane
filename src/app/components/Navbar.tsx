import Image from "next/image";
import Link from "next/link";
import { IoCall } from "react-icons/io5";

export function Navbar() {
  return (
    <header className="navbar py-4 shadow-sm">
      <div className="container flex items-center justify-between">
        <Link href="#">
          <Image
            src="/logo.png"
            width={192 / 1.5}
            height={130}
            alt="JeryanneJane.me"
          />
        </Link>
        <ul className="text-md menu menu-horizontal font-semibold">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="w-[200px] border-[1px] border-gray-200 shadow-sm">
                <li>
                  <Link href="#">Coaching Services</Link>
                </li>
                <li>
                  <Link href="#">Coaching Programs</Link>
                </li>
                <li>
                  <Link href="#">Gatherings & Retreats</Link>
                </li>
                <li>
                  <Link href="#">Cottagecore Davao</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="#">Journal</Link>
          </li>
          <li>
            <Link href="#">Testimonials</Link>
          </li>
          <li>
            <Link href="#">Shop</Link>
          </li>
        </ul>
        <a className="btn btn-accent text-white">
          <IoCall /> Free Discovery Call!
        </a>
      </div>
    </header>
  );
}
