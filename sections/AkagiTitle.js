import styled from 'styled-components'
import { red } from 'utils/colors'

const AkagiHeader = styled.h1`
  margin-top: 36px;
  text-align: center;
  font-size: 48px;
  padding: 24px 0;
`

const Red = styled.span`
  color: ${red};
`

const AkagiTitle = () => (
  <AkagiHeader>
    AKAGI<Red>.</Red>CO
  </AkagiHeader>
)

export default AkagiTitle
