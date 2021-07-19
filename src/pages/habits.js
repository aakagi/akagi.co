import Image from 'next/image'
import Link from 'next/link'
import MDXProvider from 'providers/MDXProvider'
import Habits from 'lib/published/habits.mdx'

export default function BlogPage() {
  return (
    <MDXProvider>
      <div className="flex justify-center">
        <div className="max-w-md pt-12 pb-24 px-6">
          <Habits />
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
