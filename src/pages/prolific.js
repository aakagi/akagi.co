import MDXProvider from 'providers/MDXProvider'

import Prolific from 'lib/published/prolific.mdx'

export default function BlogPage() {
  return (
    <MDXProvider>
      <div className="max-w-md py-12 px-6">
        <Prolific />
      </div>
    </MDXProvider>
  )
}
