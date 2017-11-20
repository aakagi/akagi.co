import styled from 'styled-components'
import Link from 'next/link'

const LinksWrapper = styled.div`
  margin: 72px 24px;
`

const PageLinkWrapper = styled.div`
  margin-bottom: 6px;
`

const PageLink = ({ text, ...props }) => (
  <PageLinkWrapper>
    <Link {...props}>
      <a>{text}</a>
    </Link>
  </PageLinkWrapper>
)

const LinksSection = () => (
  <LinksWrapper>
    <PageLink
      text={'Me'}
      as={`/me`}
      href={`/user?username=me`}
    />
    <PageLink
      text={'Gift List'}
      as={'/me/0001-gift-list'}
      href={'/post?postId=0001'}
    />
    <PageLink
      text={'THOUGHTS'}
      href={'/thoughts'}
    />
  </LinksWrapper>
)

export default LinksSection
