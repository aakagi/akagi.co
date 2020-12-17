import React from 'react'
import cx from 'classnames'

const ME = 'ME'
const LIFE = 'LIFE'
const DEV = 'DEV'

export default function MainLayout({ classes, activeLink = 'ME' }) {
  return (
    <div className={cx('flex w-full justify-center', classes)}>
      <ul className="flex">
        <li className={cx('px-4 mx-4 py-2 cursor-pointer', activeLink === ME ? 'font-bold border-b-2 border-black' : 'font-medium')}>
          <a>
            Me
          </a>
        </li>
        <li className={cx('px-4 mx-4 py-2 cursor-pointer', activeLink === LIFE ? 'font-bold' : 'font-medium')}>
          Life
        </li>
        <li className={cx('px-4 mx-4 py-2 cursor-pointer', activeLink === DEV ? 'font-bold' : 'font-medium')}>
          Dev
        </li>
      </ul>
    </div>
  )
}
