"use client";

import type { ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: ReactNode;
  className: string;
  activeClassName?: string;
  match?: "exact" | "prefix";
};

export default function ActiveNavLink({
  href,
  children,
  className,
  activeClassName,
  match = "exact",
}: Props) {
  const pathname = usePathname();
  const isActive =
    match === "prefix" ? pathname.startsWith(href) : pathname === href;

  return (
    <Link
      href={href}
      className={`${className}${isActive && activeClassName ? ` ${activeClassName}` : ""}`}
    >
      {children}
    </Link>
  );
}

