import styled from 'styled-components'
import ContactMe from './ContactMe'
import { red } from 'utils/colors'

const SectionWrapper = styled.div`
  margin: 36px 0;
  text-align: center;
`

const AkagiHeader = styled.h1`
  font-size: 50px;
  padding: 24px 0;
`

const Red = styled.span`
  color: ${red};
`

const ContactSubtext = styled.h3`
  font-size 16px;
  padding: 24px 0;
`

const AkagiSection = ({ onSubmit }) => (
  <SectionWrapper>
    <AkagiHeader>
      AKAGI<Red>.</Red>CO
    </AkagiHeader>
    <ContactSubtext>
      Let's keep in touch!
    </ContactSubtext>
    <ContactMe
      onSubmit={onSubmit}
    />
  </SectionWrapper>
)

export default AkagiSection
