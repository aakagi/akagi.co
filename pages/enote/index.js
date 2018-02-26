import styled from 'styled-components'
import AppLayout from 'containers/AppLayout'
import SeoHead from 'components/SeoHead'
import EnoteView from 'sections/EnoteView'

const ENote = ({ url: { query } }) => (
  <AppLayout>
    <SeoHead />
    <EnoteView {...query} />
  </AppLayout>
)

export default ENote
