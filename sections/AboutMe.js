import styled from 'styled-components'
import { red } from 'utils/colors'

const AboutMeWrapper = styled.div`
  padding: 24px 0;
  font-size 16px;
`

const P = styled.p`
  padding: 6px 0;
  line-height: 20px;
`

const Contain = styled.span`
  line-height: 20px;
  white-space: pre;
`

const Red = styled.span`
  color: ${red};
  line-height: inherit;
`

const RedAnchor = styled.a`
  color: ${red};
  line-height: inherit;
  text-decoration: underline;
`

const AboutMe = () => (
  <AboutMeWrapper>
    <P>
      Hi I<Red>’</Red>m Alex<Red>!</Red>
    </P>
    <P>
      I<Red>’</Red>m an Engineer <Red>/</Red> Entrepreneur primarily based out of
      {' '}
      <RedAnchor href={'https://en.wikipedia.org/wiki/San_Francisco'} target={'_blank'}>San Francisco</RedAnchor>
      <Red>,</Red> but I live out of a
      {' '}
      <RedAnchor href={'https://medium.com/@akagi/living-lavish-out-of-a-backpack-61a80401d6a4'} target={'_blank'}>backpack</RedAnchor>
      {' '}
      so that I can go
      {' '}
      <Contain>
        <Red>~</Red> anywhere <Red>~</Red><Red>.</Red>
      </Contain>
    </P>
    <P>
      Let<Red>’</Red>s keep in touch<Red>!</Red>
    </P>
  </AboutMeWrapper>
)

export default AboutMe
