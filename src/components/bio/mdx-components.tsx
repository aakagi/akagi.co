import { PropsWithChildren, ReactNode } from 'react'

function Red({ children }: PropsWithChildren) {
  return <span className="text-red-700">{children}</span>
}

function RedAnchor({ className, ...props }: JSX.IntrinsicElements['a']) {
  return (
    <a
      className={`text-red-700 underline ${className}`}
      target="_blank"
      {...props}
    />
  )
}

const NON_ALPLA_NUMERIC = /([^a-z\d\s])/i

function redMap(str: ReactNode | string) {
  if (typeof str !== 'string') {
    return str
  }
  const strings = str.split(NON_ALPLA_NUMERIC)
  const redStr = strings.map((s, index) =>
    s.match(NON_ALPLA_NUMERIC) ? <Red key={index}>{s}</Red> : s,
  )
  return redStr
}

function Paragraph({ children, ...props }: JSX.IntrinsicElements['p']) {
  const text = Array.isArray(children) ? children.map(redMap) : redMap(children)
  return (
    <p className="font-normal leading-6 py-2" {...props}>
      {text}
    </p>
  )
}

function Li({ children, ...props }: JSX.IntrinsicElements['li']) {
  const text = Array.isArray(children) ? children.map(redMap) : redMap(children)
  return (
    <div className="flex">
      <p>-</p>
      <li className="font-normal leading-6 pl-1 mb-1" {...props}>
        {text}
      </li>
    </div>
  )
}

function H1(props: JSX.IntrinsicElements['h1']) {
  return <h1 className="text-2xl font-medium mb-4" {...props} />
}

function H3(props: JSX.IntrinsicElements['h3']) {
  return <h1 className="text-lg mt-6 font-bold mb-3" {...props} />
}

function H6(props: JSX.IntrinsicElements['h6']) {
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

export default components
