import React from 'react'
import { MDXProvider as MdxJsProvider } from '@mdx-js/react'

function Red({ children }) {
  return <span className="text-red-700">{children}</span>
}

function RedAnchor({ className, ...props }) {
  return (
    <a
      className={`text-red-700 underline ${className}`}
      target="_blank"
      {...props}
    />
  )
}

const NON_ALPLA_NUMERIC = /([^a-z\d\s])/i

function redMap(str) {
  if (typeof str !== 'string') {
    return str
  }
  const strings = str.split(NON_ALPLA_NUMERIC)
  const redStr = strings.map((s, index) =>
    s.match(NON_ALPLA_NUMERIC) ? <Red key={index}>{s}</Red> : s
  )
  return redStr
}

function Paragraph({ children, ...props }) {
  const text = Array.isArray(children) ? children.map(redMap) : redMap(children)
  return (
    <p className="font-normal leading-6 py-2" {...props}>
      {text}
    </p>
  )
}

function Li({ children, ...props }) {
  const text = Array.isArray(children) ? children.map(redMap) : redMap(children)
  return (
    <div className="flex">
      <p>-</p>
      <p className="font-normal leading-6 pl-1 mb-1" {...props}>
        {text}
      </p>
    </div>
  )
}

function H1(props) {
  return <h1 className="text-2xl font-medium mb-4" {...props} />
}

function H3(props) {
  return <h1 className="text-lg mt-6 font-bold mb-3" {...props} />
}

function H6(props) {
  return (
    <h6 className="text-sm text-gray-400 font-medium mt-8 mb-4" {...props} />
  )
}

const components = {
  h1: H1,
  h3: H3,
  h6: H6,
  p: Paragraph,
  li: Li,
  a: RedAnchor,
}

export default function MDXProvider(props) {
  return <MdxJsProvider components={components} {...props} />
}
