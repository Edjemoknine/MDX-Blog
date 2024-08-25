import Image from "next/image";
import { Component } from "react";

import * as runtime from "react/jsx-runtime";
import Callout from "./Callout";

const useMDX = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
};

interface MDXProps {
  code: string;
}

export default function MDXContent({ code }: MDXProps) {
  const Content = useMDX(code);
  return <Content components={components} />;
}
