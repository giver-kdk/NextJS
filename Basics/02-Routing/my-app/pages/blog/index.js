// Parent Page for Routing
import Link from 'next/link'

function Blog()
{
	return (
		<>
	 		<h1>Blog Page</h1>
			 <Link href="/blog/first_blog">		
				<h1>First Blog</h1>
			</Link>
			 <Link href="/blog/second_blog">		
				<h1>Second Blog</h1>
			</Link>
		</>
	);
}
export default Blog;