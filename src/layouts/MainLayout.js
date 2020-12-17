import React from 'react'

import Navbar from 'components/Navbar'

export default function MainLayout({
  children,
}) {
  return (
    <div className="flex flex-col items-center max-w-sm mx-auto pb-16 sm:px-0 px-8">
      <Navbar classes={'pb-8 pt-8'} />

      {children}
    </div>
  )
}
