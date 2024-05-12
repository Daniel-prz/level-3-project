import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="h-20 pt-5 ">
      <ul className=" flex justify-around gap-20 items-center">
        <li>
          <Link href="https://github.com/Daniel-prz/level-3-project.git">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/daniel-perez-dev84/">
            LinkedIn
          </Link>
        </li>
      </ul>
    </div>
  );
}
