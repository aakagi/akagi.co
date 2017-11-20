import styled from 'styled-components'

// import SeoHead from 'components/SeoHead'
import Link from 'next/link'
import AppLayout from 'containers/AppLayout'
import SeoHead from 'components/SeoHead'

import AkagiSection from 'containers/AkagiSection'

// const LinksSection 

const Index = () => (
  <AppLayout>
    <SeoHead />
    <AkagiSection />
    {/*<LinksSection />*/}

    {/*<div>
      <Link as={`/me/0001-gift-list`} href={`/post?postId=0001`}>
        <a>Gift List</a>
      </Link>
    </div>
    <div>
      <Link as={`/me`} href={`/user?username=me`}>
        <a>My Profile</a>
      </Link>
    </div>
    <div>
      <Link href={'/thoughts'}>
        <a>THOUGHTS</a>
      </Link>
    </div>*/}
  </AppLayout>
)

export default Index
