import Link from 'next/link'

function DynamicNested()
{
	return (
		<>
			<Link href="/dynamic_nested/1">
				<h1>Dynamic Nested 1</h1>		
			</Link>
			<Link href="/dynamic_nested/2">
				<h1>Dynamic Nested 2</h1>		
			</Link>
			<Link href="/dynamic_nested/3">
				<h1>Dynamic Nested 3</h1>		
			</Link>
		</>
	);
}
export default DynamicNested;