import Link from 'next/link'
import { useRouter } from 'next/router';
function Home()
{
	let router =  useRouter();						// Always write hook on top of component
	// Programmatically Navigating in NextJS
	function handleClick()
	{
		console.log("Placing Your Order!!!");
		// This will add this route on current route
		// router.push("/product");
		// This is erase previous route and directly goto "/product"
		router.replace("/product");
	}
	return (
		<>
			<h1>Home Page</h1>
			{/* NOTE: Use "a" tag to visit external websites, use "Link" for internal routing */}
			<Link href="/blog">
				<h1>Blog Page</h1>				
			</Link>
			<Link href="/product">
				<h1>Product Page</h1>				
			</Link>
			<Link href="/docs">
				<h1>Docs Page</h1>				
			</Link>
			<Link href="/dynamic_nested">
				<h1>Dynamic Nested Page</h1>				
			</Link>
			<button onClick={handleClick}>Place Order</button>
		</>
	);
}
export default Home;