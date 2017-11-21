import styled from 'styled-components'
import AppLayout from 'containers/AppLayout'
import SeoHead from 'components/SeoHead'

import {
  publicPost,
  friends,
  personal,
} from 'THOUGHT'

const TemplateLiteralDisplay = (jsString) => {
  return jsString.split('\n').map((item, key) => {
    return (
      <div
        key={key}
        onMouseUp={(e) => handleMouseUp(e)}
        >
        {item.replace(/ {2}/g, "\u00a0\u00a0")}
        <br/>
      </div>
    )
  })
}

const text = publicPost[0].text

const PostReaderWrapper = styled.div`
  font-family: 'Lora';
  padding: 24px;
  line-height: 1.25;
  font-size: 18px;
  margin-bottom: 300px;
`

const Post = () => (
  <AppLayout>
    <SeoHead />
    <PostReaderWrapper>
      {TemplateLiteralDisplay(text)}
    </PostReaderWrapper>
  </AppLayout>
)

export default Post
