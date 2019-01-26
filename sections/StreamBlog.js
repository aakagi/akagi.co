import styled from 'styled-components'
import Markdown from 'react-markdown'
import blogPosts from 'blog'

const StreamBlogWrapper = styled.div`
  margin-bottom: 10vh;
  margin: 0 auto;
  width: 36rem;
  font-family: "Trebuchet MS", sans-serif;
  font-size: 17px;

  h1 {
    font-size: 2.75em;
  }

  h2 {
    padding: 1.75em 0 1.125em;
    color: #171717;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    font-weight: 500;
    font-size: 1.6875em;
    line-height: 1.33em;
    letter-spacing: 0.04em;
  }

  p {
    color: #646464;
    margin-bottom: 1.5em;
    line-height: 1.625em;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }
`

const StreamBlog = () => {
  return (
    <StreamBlogWrapper>
      {blogPosts.map((post) => (
        <Markdown source={post} />
      ))}
    </StreamBlogWrapper>
  )
}

export default StreamBlog
