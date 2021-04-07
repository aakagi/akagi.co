import React from 'react'

const Red = ({ children }) => <span className="text-red-700">{children}</span>
const RedAnchor = ({ className, ...props }) => (
  <a className={`text-red-700 underline ${className}`} {...props} />
)

export default function Bio({ className }) {
  return (
    <div className={className}>
      <p className="leading-6 py-2">
        Hi<Red>,</Red> I<Red>’</Red>m Alex<Red>!</Red>
      </p>
      <p className="leading-6 py-2">
        I<Red>’</Red>m a Software Developer <Red>/</Red> Entrepreneur primarily
        based out of{' '}
        <RedAnchor
          href={'https://www.google.com/maps/place/Lower+East+Side,+NY'}
          target={'_blank'}
        >
          New York
        </RedAnchor>
        <Red>,</Red> but I live out of a{' '}
        <RedAnchor
          href={
            'https://medium.com/@akagi/living-lavish-out-of-a-backpack-61a80401d6a4'
          }
          target={'_blank'}
        >
          backpack
        </RedAnchor>{' '}
        so I can live <span style={{ whiteSpace: 'pre' }}>✨anywhere✨</span>
        <Red>.</Red>
      </p>
      <p className="leading-6 py-2">
        You can reach me at{' '}
        <RedAnchor href="mailto:alex@akagi.co">alex@akagi.co</RedAnchor>
        <Red>.</Red>
      </p>
      <p className="leading-6 py-2">
        Let<Red>’</Red>s keep in touch<Red>!</Red>
      </p>
    </div>
  )
}
