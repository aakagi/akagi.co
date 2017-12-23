import styled from 'styled-components'
import ContactMe from './ContactMe'
import { red } from 'utils/colors'

const SectionWrapper = styled.div`
  margin: 36px 0;
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

const AkagiSection = ({ onSubmit }) => (
  <SectionWrapper>
    <AkagiHeader>
      AKAGI<Red>.</Red>CO
    </AkagiHeader>
    <ContactSubtext>
      Let<Red>’</Red>s keep in touch<Red>!</Red>
    </ContactSubtext>
    <ContactMe
      onSubmit={onSubmit}
    />
  </SectionWrapper>
)

export default AkagiSection
