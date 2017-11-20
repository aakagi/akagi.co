import styled from 'styled-components'

// import SeoHead from 'components/SeoHead'
import Link from 'next/link'
import AppLayout from 'containers/AppLayout'
import SeoHead from 'components/SeoHead'

import AkagiSection from 'containers/AkagiSection'
// import { white } from 'utils/colors'

// import BlogPosts from './components/BlogPosts'
// import FacebookLogin from './components/FacebookLogin'

// const Wrapper = styled.div`
//   height: 100%;
//   min-height: 100vh;
//   text-align: center;
// `

// const ProductList = styled.div`
//   a {
//     // color: ${white};
//     // text-decoration: none;
//   }
// `
// 


const Index = () => (
  <AppLayout>
    <SeoHead />
    <AkagiSection />

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




// const ContactInfo = styled.div``
// const CalendarButton = styled.button``
// const Footer = styled.footer``

// const Home = () => (
//   <Wrapper>
//     <SeoHead />
//     <BlogPosts />
//     <FacebookLogin />
//     <ProductList>
//       <Link to={'/thoughts'}>
//         AKAGI THOUGHTS
//       </Link>
//     </ProductList>
//     <ContactInfo>
//       I’m Alex - you can reach me at alex@akagi.co
//     </ContactInfo>
//     <CalendarButton>
//       Let’s Meet!
//     </CalendarButton>
//     <Footer />
//   </Wrapper>
// )