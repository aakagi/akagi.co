import React from 'react'

const Red = ({ children }) => <span className="text-red-700">{children}</span>
const RedAnchor = props => <a className="text-red-700 underline" {...props} />

export default function Bio({ className }) {
  return (
    <div className={className}>
      <p className="leading-6 py-2">
        Hi<Red>,</Red> I<Red>’</Red>m Alex<Red>!</Red>
      </p>
      <p className="leading-6 py-2">
        I<Red>’</Red>m an Engineer <Red>/</Red> Entrepreneur primarily based out
        of{' '}
        <RedAnchor
          href={
            'https://www.google.com/maps/place/San+Francisco,+CA/data=!4m2!3m1!1s0x80859a6d00690021:0x4a501367f076adff'
          }
          target={'_blank'}
        >
          San Francisco
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
        so that I can live from{' '}
        <span style={{ whiteSpace: 'pre' }}>
          <Red>~</Red> anywhere <Red>~</Red>
        </span>
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
