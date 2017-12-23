import styled from 'styled-components'
import Link from 'next/link'
import { red } from 'utils/colors'

const LinksWrapper = styled.div`
  margin: 0 auto 200px;
  padding: 24px;
  max-width: 500px;
`

const Group = styled.div`
  margin-bottom: 24px;
`

const GroupTitle = styled.h3`
  margin-bottom: 6px;
`

const PageLinkWrapper = styled.div`
  margin-bottom: 6px;
  
  a {
    color: ${red};
  }
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
    <Group>
      <GroupTitle>
        Links
      </GroupTitle>
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
        text={'Helio Ventures'}
        href={'/thoughts'}
      />
    </Group>
    <Group>
      <GroupTitle>
        Essays
      </GroupTitle>
      <PageLink
        text={'Master Plan'}
        href={'/thoughts'}
      />
      <PageLink
        text={'How to Life'}
        href={'/thoughts'}
      />
      <PageLink
        text={'How Alex’s Brain Works'}
        href={'/thoughts'}
      />
    </Group>
  </LinksWrapper>
)

export default LinksSection
