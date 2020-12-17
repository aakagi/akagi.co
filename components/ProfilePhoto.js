import React from 'react'

export default function ProfilePhoto({ className }) {
  return (
    <picture>
      <source srcSet="/profile-450.jpg 450w, /profile-450-2x.jpg 2x" type="image/jpg" />
      <source srcSet="/profile-320.jpg 320w, /profile-320-2x 2x" type="image/jpg" />
      <img className={className} src="/profile.jpg" alt="" />
    </picture>
  )
}
