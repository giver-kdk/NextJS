import Link from 'next/link'

function Products()
{
	return (
		<>
			<Link href="/product/1">		
				<h1>Products 1</h1>
			</Link>
			<Link href="/product/2">		
				<h1>Products 2</h1>
			</Link>
			<Link href="/product/3">		
				<h1>Products 3</h1>
			</Link>
			<Link href="/product/earbud">		
				<h1>Earbud</h1>
			</Link>
		</>
	);
}
export default Products;