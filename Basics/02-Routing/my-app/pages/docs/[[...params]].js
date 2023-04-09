import {useRouter} from 'next/router'				// Import this hook for accessing "review_id"
import Link from 'next/link'

function Documentation()
{
	let router = useRouter();
	// "router.query" returns an object includeing "params" as key
	let {params = []} = router.query;		// let {params = []} gives default value of "params" as [] if route.query is undefined
	console.log(params);
	// "params" is an array.
	if(params.length == 1)
	{
		return (
			<h1>This is docs page for feature: {params[0]}</h1>
		);
	}
	else if(params.length == 2)
	{
		return (
			<h1>This is docs page for feature: {params[0]} and concept: {params[1]}</h1>
		);
	}
	return (
		<>
			<h1>This is docs main page</h1>
			<Link href="/docs/feature1">		
				<h1>Feature 1</h1>
			</Link>
			<ul>
				<li>
					<Link href="/docs/feature1/concept1">		
						<h1>Concept 1</h1>
					</Link>
				</li>
				<li>
					<Link href="/docs/feature1/concept2">		
						<h1>Concept 2</h1>
					</Link>
				</li>
			</ul>
			<Link href="/docs/feature2">		
				<h1>Feature 2</h1>
			</Link>
			<ul>
				<li>
					<Link href="/docs/feature2/concept1">		
						<h1>Concept 1</h1>
					</Link>
				</li>
				<li>
					<Link href="/docs/feature2/concept2">		
						<h1>Concept 2</h1>
					</Link>
				</li>
			</ul>
		</>
	);
}
export default Documentation;