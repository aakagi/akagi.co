import React from 'react'
import cx from 'classnames'

export default function MainLayout({
  children,
}) {
  return (
    <div
      className={cx(
        'flex',
        'flex-col',
        'items-center',
        'max-w-sm',
        'mx-auto',
        'px-8',
        'sm:px-0',
      )}
    >
      {children}
    </div>
  )
}
