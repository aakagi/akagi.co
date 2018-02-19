import AppLayout from 'containers/AppLayout'
import SeoHead from 'components/SeoHead'
import NewUser from 'sections/NewUser'

const New = (props) => (
  <AppLayout>
    <SeoHead />
    <NewUser username={props.url.query.username} />
  </AppLayout>
)

export default New
