import { Mail, X } from "lucide-react";
import React from "react";
import Icons from "./ui/Icons";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a href="mailto:mokninemoknine999@gmail.com" target="_blank">
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </a>
          <a href="mailto:mokninemoknine999@gmail.com" target="_blank">
            <Icons.twitter className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="mailto:mokninemoknine999@gmail.com" target="_blank">
            <Icons.github className="w-6 h-6" />
            <span className="sr-only">Github</span>
          </a>
        </div>
        <div className="mb-2 flex justify-center items-center">
          <a href={siteConfig.links.portfolio} target="_blank">
            Moknine
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
