import AppLayout from 'containers/AppLayout'
import SeoHead from 'components/SeoHead'
import UserPage from 'sections/UserPage'

const Username = ({ url: { query } }) => (
  <AppLayout>
    <SeoHead />
    <UserPage {...query} />
  </AppLayout>
)

export default Username
