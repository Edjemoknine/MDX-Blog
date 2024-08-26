import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "About Me",
  description:
    "Frontend developer try demonstrate some tips in Next.js and React.js",
};
const About = () => {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col sm:justify-between gap-5 items-start md:flex-row">
        <div className="flex-1 space-x-6">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-6" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="w-48 h-48">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            Moknine Edj
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Developer
          </p>
        </div>
        <p className=" text-muted-foreground text-lg py-4 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem qui
          quibusdam odit, nulla voluptatum fuga labore a? Qui placeat, quae
          blanditiis commodi fuga assumenda reiciendis ab nobis aperiam,
          mollitia suscipit!
        </p>
      </div>
    </div>
  );
};

export default About;
