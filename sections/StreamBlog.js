import styled from 'styled-components'
import Markdown from 'react-markdown'
import blogPost from 'blog/temp.md';

const StreamBlogWrapper = styled.div`
  margin-bottom: 10vh;
`

// const input = '# This is a header\n\nAnd this is a paragraph'

const StreamBlog = () => {
  return (
    <StreamBlogWrapper>
      <Markdown source={blogPost} />
    </StreamBlogWrapper>
  )
}

export default StreamBlog
