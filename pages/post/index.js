import AppLayout from 'containers/AppLayout'
import SeoHead from 'components/SeoHead'
import AkagiSection from 'containers/AkagiSection'
import LinksSection from 'containers/LinksSection'

import {
  publicPost,
  friends,
  personal,
} from 'THOUGHT'

const text = publicPost[0].text

const Post = () => (
  <AppLayout>
    <SeoHead />
    <div>
      {text}
    </div>
  </AppLayout>
)

export default Post
