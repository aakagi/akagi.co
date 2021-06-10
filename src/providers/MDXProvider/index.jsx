import React from 'react'
import { MDXProvider as MdxJsProvider } from '@mdx-js/react'

function Red({ children }) {
  return <span className="text-red-700">{children}</span>
}

function RedAnchor({ className, ...props }) {
  return <a className={`text-red-700 underline ${className}`} {...props} />
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

const components = {
  p: Paragraph,
  a: RedAnchor,
}

export default function MDXProvider(props) {
  return <MdxJsProvider components={components} {...props} />
}
