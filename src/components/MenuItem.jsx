import Link from "next/link";
import React from "react";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div className="">
      <Link
        className="flex mx-4 lg:mx-6  my-2  hover:text-amber-600"
        href={address}
      >
        <Icon className="text-2xl sm:hidden " />
        <p className="hidden sm:inline text-sm">{title}</p>
      </Link>
    </div>
  );
}
