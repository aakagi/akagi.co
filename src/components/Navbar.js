import React from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'

const ME = 'ME'
const LIFE = 'LIFE'
const DEV = 'DEV'

const routes = {
  ME: '/',
  LIFE: '/life',
  DEV: '/dev',
}

function NavLink({ title, route, ...props }) {
  const { asPath } = useRouter()

  return (
    <Link href={route}>
      <a
        className={cx(
          'px-4 mx-4 py-2 cursor-pointer',
          asPath === route ? 'font-bold border-b-2 border-black' : 'font-medium hover:border-b-2 hover:border-gray-300',
        )}
      >
        {title}
      </a>
    </Link>
  )
}

export default function MainLayout({ classes }) {
  const { asPath } = useRouter()

  const linkClasses = 'px-4 mx-4 py-2 cursor-pointer hover:border-b-2 hover:border-gray-300'

  return (
    <div className={cx('flex w-full justify-center', classes)}>
      <ul className="flex">
        <NavLink
          title="Me"
          route={routes.ME}
        />
        <NavLink
          title="Life"
          route={routes.LIFE}
        />
        <NavLink
          title="Dev"
          route={routes.DEV}
        />
      </ul>
    </div>
  )
}
