import styled from 'styled-components'
import { red } from 'utils/colors'

const TitleWrapper = styled.div`
`

const LogoWrapper = styled.div`
  text-align: center;
  margin: 24px 0px 12px;
`

const AkagiHeader = styled.h1`
  
  text-align: center;
  font-size: 48px;
  padding: 24px 0;
  line-height: 12px;
`

const Red = styled.span`
  color: ${red};
  line-height: 12px;
`

const AkagiTitle = () => (
  <TitleWrapper>
    <LogoWrapper>
      <img width={'100px'} height={'100px'} src={'/static/logo'} />
    </LogoWrapper>
    <AkagiHeader>
      AKAGI<Red>.</Red>CO
    </AkagiHeader>
  </TitleWrapper>
)

export default AkagiTitle
