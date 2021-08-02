import Image from 'next/image'
import Link from 'next/link'
import MDXProvider from 'providers/MDXProvider'

import Week1 from 'lib/published/week-1.mdx'
import Week2 from 'lib/published/week-2.mdx'
import Week3 from 'lib/published/week-3.mdx'
import Week4 from 'lib/published/week-4.mdx'

const posts = {
  'week-1': Week1,
  'week-2': Week2,
  'week-3': Week3,
  'week-4': Week4,
}

export default function PostPage(props) {
  const Post = posts[props.post]
  return (
    <MDXProvider>
      <div className="flex justify-center">
        <div className="max-w-md pt-12 pb-24 px-6">
          <Post />
        </div>
      </div>

      <div className="w-full flex justify-center pt-4 pb-32">
        <Link href="/">
          <a>
            <Image
              layout="intrinsic"
              width="96"
              height="96"
              src="/akagi-logo.png"
              alt="赤木"
              priority
            />
          </a>
        </Link>
      </div>
    </MDXProvider>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      post: context.params.post,
    },
  }
}

export async function getStaticPaths() {
  const paths = Object.keys(posts).map((postPath) => ({
    params: { post: postPath },
  }))
  console.log('paths', paths)
  return { paths, fallback: 'blocking' }
}
