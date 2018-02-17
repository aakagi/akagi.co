import styled from 'styled-components'
import AppLayout from 'containers/AppLayout'
import SeoHead from 'components/SeoHead'

const ENoteWrapper = styled.div`
  padding: 24px;
  line-height: 1.25;
  font-size: 18px;
  margin-bottom: 300px;
`

const ENote = () => (
  <AppLayout>
    <SeoHead />
    <ENoteWrapper>
      test
    </ENoteWrapper>
  </AppLayout>
)

export default ENote
