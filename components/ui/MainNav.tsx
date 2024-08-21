"use client";
import Link from "next/link";
import React from "react";
import Icons from "./Icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MainNav = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <Link href={"/"} className="mr-6 flex items-center space-x-2">
        <Icons.logo className="w-7 h-7" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>

      <Link
        href={"/blog"}
        className={cn(
          "font-medium text-sm hidden md:flex transition-colors hover:text-primary",
          pathname === "/blog" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Blog
      </Link>

      <Link
        href={"/about"}
        className={cn(
          "font-medium text-sm hidden md:flex  transition-colors hover:text-primary",
          pathname === "/blog" ? "text-foreground" : "text-foreground/60"
        )}
      >
        About
      </Link>
    </div>
  );
};

export default MainNav;
