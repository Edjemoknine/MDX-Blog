import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./button";
import Icons from "./Icons";
import MainNav from "./MainNav";
import { MobileNav } from "../MobileNav";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 w-full border border-border bg-background border-b supports-[backdrop:filter]:bg-background/95">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link href={siteConfig.links.github} target="_blank">
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0"
                )}
              >
                <Icons.twitter className="h-4 w-4" />
                <span className="sr-only">Github</span>
              </div>
            </Link>
            <Link href={siteConfig.links.github} target="_blank">
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0"
                )}
              >
                <Icons.github className="h-4 w-4" />
                <span className="sr-only">Github</span>
              </div>
            </Link>
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
