import styled from 'styled-components'
import Markdown from 'react-markdown'
import blogPosts from 'blog'
import { mobile } from 'utils/media'

const StreamBlogWrapper = styled.div`
  margin-bottom: 10vh;
  margin: 10rem auto;
  width: 36rem;
  font-family: "Trebuchet MS", sans-serif;
  font-size: 17px;

  ${mobile`
    margin: 1rem;
  `}

  h1 {
    font-size: 2.4em;
    margin: 1em 0;
  }

  h2 {
    color: #171717;
    margin: 1em 0;
    font-size: 2.1em;
    font-weight: 500;
    padding: 1.75em 0 1.125em;
  }

  h3 {
    color: #171717;
    font-size: 1.9em;
    font-weight: 500;
    margin: 1em 0;
    padding: 1.75em 0 1.125em;
  }

  h4 {
    color: #171717;
    margin: 1em 0;
    font-size: 1.6em;
    font-weight: 500;
    padding: 1.75em 0 1.125em;
  }

  h5 {
    color: #171717;
    font-size: 1.3em;
    font-weight: 500;
    margin: 1em 0;
    padding: 1.75em 0 1.125em;
  }

  p {
    color: #646464;
    display: block;
    line-height: 1.625em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-bottom: 1.5em;
  }

  li {
    margin-block-start: 0.8em;
    margin-block-end: 0em;
    margin-inline-start: 1em;
    
    ul, ol {
      padding-inline-start: 1em;
    }
  }

  blockquote {
    border-left: .25em solid #dfe2e5;
    color: #6a737d;
    padding: 0 1em;
  }

  code {
    background-color: rgba(27,31,35,.05);
    border-radius: 3px;
    font-size: 85%;
    margin: 0;
    padding: .2em .4em;
  }

  pre {
    margin-bottom: 16px;
    background-color: #f6f8fa;
    border-radius: 3px;
    line-height: 1.45;
    overflow: auto;
    padding: 16px;

    code {
      background-color: #f6f8fa;
    }
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
