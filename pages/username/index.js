import AppLayout from 'containers/AppLayout'
import SeoHead from 'components/SeoHead'
import UserPage from 'sections/UserPage'

const Username = (props) => (
  <AppLayout>
    <SeoHead />
    <UserPage {...props} />
  </AppLayout>
)

export default Username
