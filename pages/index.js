// import React from 'react'
// import styled from 'styled-components'

// import SeoHead from 'components/SeoHead'
import Link from 'next/link'

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


const Index = () => (
  <div>
    <Link href={'/thoughts'}>
      <a>Thoughts</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default Index
