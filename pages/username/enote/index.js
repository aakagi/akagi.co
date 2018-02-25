import styled from 'styled-components'
import AppLayout from 'containers/AppLayout'
import SeoHead from 'components/SeoHead'
import EnoteView from 'sections/EnoteView'
import NewEnote from 'sections/NewEnote'

const ENote = (props) => (
  <AppLayout>
    <SeoHead />
    {props.url.query.enoteExists
      ? <EnoteView {...props} />
      : <NewEnote {...props} />
    }
  </AppLayout>
)

export default ENote
