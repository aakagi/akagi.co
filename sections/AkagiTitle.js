import styled from 'styled-components'
import { red } from 'utils/colors'

const SectionWrapper = styled.div`
  margin-top: 36px;
  text-align: center;
`

const AkagiHeader = styled.h1`
  font-size: 48px;
  padding: 24px 0;
`

const Red = styled.span`
  color: ${red};
`

const ContactSubtext = styled.h3`
  font-size 16px;
  padding: 24px 0;
`

const AkagiTitle = () => (
  <SectionWrapper>
    <AkagiHeader>
      AKAGI<Red>.</Red>CO
    </AkagiHeader>
    <ContactSubtext>
      Let<Red>’</Red>s keep in touch<Red>!</Red>
    </ContactSubtext>
  </SectionWrapper>
)

export default AkagiTitle
