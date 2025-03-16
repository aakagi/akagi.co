"use client";

import type { MDXComponents } from "mdx/types";
import type { ComponentProps, PropsWithChildren, ReactNode } from "react";
import { MDXProvider as MdxJsProvider } from "@mdx-js/react";

const Red = ({ children }: PropsWithChildren) => {
  return <span className="text-red-700">{children}</span>;
};

const RedAnchor = ({ className, ...props }: ComponentProps<"a">) => {
  console.log("anchor");
  return (
    <a
      className={`text-red-700 underline ${className}`}
      target="_blank"
      {...props}
    />
  );
};

const NON_ALPLA_NUMERIC = /([^a-z\d\s])/i;

const redMap = (str: ReactNode | string) => {
  if (typeof str !== "string") {
    return str;
  }
  const strings = str.split(NON_ALPLA_NUMERIC);
  return strings.map((s, index) =>
    s.match(NON_ALPLA_NUMERIC) ? <Red key={index}>{s}</Red> : s
  );
};

const Paragraph = ({ children, ...props }: ComponentProps<"p">) => {
  const text = Array.isArray(children)
    ? children.map(redMap)
    : redMap(children);
  return (
    <p className="font-normal leading-6 py-2" {...props}>
      {text}
    </p>
  );
};

const Li = ({ children, ...props }: ComponentProps<"li">) => {
  const text = Array.isArray(children)
    ? children.map(redMap)
    : redMap(children);
  return (
    <div className="flex">
      <p>-</p>
      <li className="font-normal leading-6 pl-1 mb-1" {...props}>
        {text}
      </li>
    </div>
  );
};

const H1 = (props: ComponentProps<"h1">) => {
  return <h1 className="text-2xl font-medium mb-4" {...props} />;
};

const H3 = (props: ComponentProps<"h3">) => {
  return <h1 className="text-lg mt-6 font-bold mb-3" {...props} />;
};

const H6 = (props: ComponentProps<"h6">) => {
  return (
    <h6 className="text-sm text-gray-400 font-medium mt-8 mb-4" {...props} />
  );
};

export const mdxComponents: MDXComponents = {
  h1: H1,
  h3: H3,
  h6: H6,
  p: Paragraph,
  li: Li,
  a: RedAnchor,
};

export const MdxProvider = ({ children }: PropsWithChildren) => {
  return <MdxJsProvider components={mdxComponents}>{children}</MdxJsProvider>;
};
