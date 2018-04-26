import styled from 'styled-components'

const LogoWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
`

const AkagiLogo = ({ className }) => (
  <LogoWrapper className={className}>
    <img width={'100px'} height={'100px'} src={'/static/logo'} />
  </LogoWrapper>
)

export default AkagiLogo
