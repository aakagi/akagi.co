"use client";

import type { MDXComponents } from "mdx/types";
import type { ComponentProps, PropsWithChildren, ReactNode } from "react";
import { MDXProvider as MdxJsProvider } from "@mdx-js/react";

const Red = ({ children }: PropsWithChildren) => {
  return <span className="text-red-700">{children}</span>;
};

const RedAnchor = ({ className, ...props }: ComponentProps<"a">) => {
  return <a className={`text-red-700 underline ${className}`} target="_blank" {...props} />;
};

const NON_ALPLA_NUMERIC = /([^a-z\d\s])/i;

const redMap = (str: ReactNode | string) => {
  if (typeof str !== "string") {
    return str;
  }
  const strings = str.split(NON_ALPLA_NUMERIC);
  return strings.map((s, index) => (s.match(NON_ALPLA_NUMERIC) ? <Red key={index}>{s}</Red> : s));
};

const Paragraph = ({ children, ...props }: ComponentProps<"p">) => {
  const text = Array.isArray(children) ? children.map(redMap) : redMap(children);
  return (
    <p className="py-2 leading-6 font-normal" {...props}>
      {text}
    </p>
  );
};

const Li = ({ children, ...props }: ComponentProps<"li">) => {
  const text = Array.isArray(children) ? children.map(redMap) : redMap(children);
  return (
    <div className="flex">
      <p>-</p>
      <li className="mb-1 pl-1 leading-6 font-normal" {...props}>
        {text}
      </li>
    </div>
  );
};

const H1 = (props: ComponentProps<"h1">) => {
  return <h1 className="mb-4 text-2xl font-medium" {...props} />;
};

const H3 = (props: ComponentProps<"h3">) => {
  return <h1 className="mt-6 mb-3 text-lg font-bold" {...props} />;
};

const H6 = (props: ComponentProps<"h6">) => {
  return <h6 className="mt-8 mb-4 text-sm font-medium text-gray-400" {...props} />;
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
