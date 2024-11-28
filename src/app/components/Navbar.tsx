import Image from "next/image";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { CgMenu } from "react-icons/cg";

export function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}

function DesktopNavbar() {
  return (
    <header className="navbar hidden py-4 shadow-sm lg:block">
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
                  <Link href="#">CottageCore Davao</Link>
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

function MobileNavbar() {
  return (
    <header className="navbar flex flex-1 py-4 shadow-sm lg:hidden">
      <Link href="#" className="mx-auto">
        <Image
          src="/logo.png"
          width={192 / 2}
          height={130}
          alt="JeryanneJane.me"
        />
      </Link>
      <CgMenu size={32} />
    </header>
    // <div className="navbar absolute right-0 z-10 block h-full w-[80%] bg-white py-4 shadow-lg md:w-[50%] lg:hidden">
    //   <div className="flex h-full flex-1 flex-col items-center justify-between py-12">
    //     <Link href="#">
    //       <Image
    //         src="/logo.png"
    //         width={192 / 1.5}
    //         height={130}
    //         alt="JeryanneJane.me"
    //       />
    //     </Link>
    //     <ul className="menu menu-vertical gap-6 text-xl font-semibold">
    //       <li>
    //         <Link href="#">Home</Link>
    //       </li>
    //       <li>
    //         <Link href="#">About</Link>
    //       </li>
    //       <li>
    //         <details>
    //           <summary>Services</summary>
    //           <ul className="!absolute -left-[55%] !z-20 !m-0 flex !w-[320px] flex-col gap-4 border-[1px] border-gray-200 bg-white px-4 shadow-sm">
    //             <li>
    //               <Link href="#">Coaching Services</Link>
    //             </li>
    //             <li>
    //               <Link href="#">Coaching Programs</Link>
    //             </li>
    //             <li>
    //               <Link href="#">Gatherings & Retreats</Link>
    //             </li>
    //             <li>
    //               <Link href="#">Cottagecore Davao</Link>
    //             </li>
    //           </ul>
    //         </details>
    //       </li>
    //       <li>
    //         <Link href="#">Journal</Link>
    //       </li>
    //       <li>
    //         <Link href="#">Testimonials</Link>
    //       </li>
    //       <li>
    //         <Link href="#">Shop</Link>
    //       </li>
    //     </ul>
    //     <a className="btn btn-accent text-white">
    //       <IoCall /> Free Discovery Call!
    //     </a>
    //   </div>
    // </div>
  );
}
