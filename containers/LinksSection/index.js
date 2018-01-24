import styled from 'styled-components'
import Link from 'next/link'
import { red } from 'utils/colors'

const LinksWrapper = styled.div`
  margin: 0 auto 200px;
  padding: 24px;
  max-width: 500px;
`

const Group = styled.div`
  margin-bottom: 36px;
`

const GroupTitle = styled.h3`
  margin-bottom: 6px;
`

const PageLinkWrapper = styled.div`
  margin-bottom: 12px;
  
  a {
    color: ${red};
  }
`

const PageLink = ({ text, ...props }) => (
  <PageLinkWrapper>
    <Link {...props}>
      <a target={'_blank'}>{text}</a>
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
        text={'Source For This Website'}
        href={'https://github.com/aakagi/akagi-website'}
      />
      <PageLink
        text={'Gift List'}
        as={'/me/0001-gift-list'}
        href={'/post?postId=0001'}
      />
      <PageLink
        text={'Heliocentric Ventures'}
        href={'http://helio.ventures'}
      />
    </Group>
    <Group>
      <GroupTitle>
        Heliocentric
      </GroupTitle>
      <PageLink
        text={'1 - Heliocentric'}
        href={'https://medium.com/@akagi/heliocentric-ef6d80001ef2'}
      />
      <PageLink
        text={'2 - How Alex’s Brain Works'}
        href={'https://medium.com/@akagi/how-alexs-brain-works-39451a4becd0'}
      />
      <PageLink
        text={'3 - The Ephemeral River (in progress)'}
        href={''}
      />
    </Group>
    <Group>
      <GroupTitle>
        College Dropout
      </GroupTitle>
      <PageLink
        text={'Vegas & SF - Part 1 - "Vegas Airport"'}
        href={'https://www.facebook.com/notes/alex-akagi/vegas-sf-part-1-vegas-airport/10152376812662085/'}
      />
      <PageLink
        text={'Vegas & SF - Part 2 - "The Things That Changed My Life"'}
        href={'https://www.facebook.com/notes/alex-akagi/vegas-sf-part-2-the-things-that-changed-my-life/10152380673302085/'}
      />
      <PageLink
        text={'Vegas & SF - Part 3 - "Silicon Valley"'}
        href={'https://www.facebook.com/notes/alex-akagi/vegas-sf-part-3-silicon-valley/10152389170662085/'}
      />
      <PageLink
        text={'Palo Alto - Part 1 - "Updates"'}
        href={'https://www.facebook.com/notes/alex-akagi/palo-alto-part-1-updates/10152506425572085/'}
      />
      <PageLink
        text={'Palo Alto - Part 2 - “Daily Life”'}
        href={'https://www.facebook.com/notes/alex-akagi/palo-alto-part-2-daily-life/10152527847677085/'}
      />
      <PageLink
        text={'Palo Alto - Part 3 - "Awesome Stuff!"'}
        href={'https://www.facebook.com/notes/alex-akagi/palo-alto-part-3-awesome-stuff/10152575843057085/'}
      />
      <PageLink
        text={'Los Angeles & San Francisco - Part 1 - "Impulse Vacation"'}
        href={'https://www.facebook.com/notes/alex-akagi/los-angeles-san-francisco-part-1-impulse-vacation/10152655149242085/'}
      />
      <PageLink
        text={'Los Angeles & San Francisco - Part 2 - "A Few Life Choices"'}
        href={'https://www.facebook.com/notes/alex-akagi/los-angeles-san-francisco-part-2-a-few-life-choices/10152712386917085/'}
      />
      <PageLink
        text={'LA, SF, & NYC - Part 3 - "Recap"'}
        href={'https://www.facebook.com/notes/alex-akagi/la-sf-nyc-part-3-recap/10152811018817085/'}
      />
      <PageLink
        text={'10 - "I <3 NY"'}
        href={'https://www.facebook.com/notes/alex-akagi/10-i-3-ny/10153005975822085/'}
      />
      <PageLink
        text={'11 - Back In SF'}
        href={'https://www.facebook.com/notes/alex-akagi/11-back-in-sf/10153276258187085/'}
      />
      <PageLink
        text={'12 - A Birthday Note'}
        href={'https://www.facebook.com/notes/alex-akagi/12-a-birthday-note/10153455753252085/'}
      />
      <PageLink
        text={'13 - Tahoe & Visiting Indy'}
        href={'https://www.facebook.com/notes/alex-akagi/13-tahoe-visiting-indy/10153902067472085/'}
      />
      <PageLink
        text={'14 - America & What’s Next'}
        href={'https://www.facebook.com/notes/alex-akagi/14-america-whats-next/10154312393812085/'}
      />
    </Group>
  </LinksWrapper>
)

export default LinksSection
