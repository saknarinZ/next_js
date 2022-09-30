import Link from "next/link";

import classes from "./main-header.module.css";

function MainHeader() {
  return (
    <header className="w-full flex justify-between items-baseline py-4 px-[10%] h-20 bg-[#202020]">
      <div className="text-2xl  font-Fira h-full flex justify-center items-center text-secondary md:text-4xl">
        <Link href="/">NextEvents</Link>
      </div>
      <nav className="no-underline text-secondary text-base md:text-2xl">
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
