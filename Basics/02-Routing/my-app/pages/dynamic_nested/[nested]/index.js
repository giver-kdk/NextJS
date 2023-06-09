// Dynamically Routing Page with Nesting
// 1st "Next" will search for existing "nested" named file in the directory
// If file is not found then it uses this dynamically routing page
// To route, goto "dynamic_nested/1", "dynamic_nested/2", "dynamic_nested/3", etc
import {useRouter} from 'next/router'				// Import this hook for accessing "nested"
import Link from 'next/link'

function NestedDetail()
{
	let router = useRouter();
	let nestedID = router.query.nested;		// Access the "nested" during routing dynamically
	return (
		<>
			<h1>Dynamically Nested Detail for ID: {nestedID}</h1>
			<Link href={`/dynamic_nested/${nestedID}/review`}>
				<h1>Review for content: {nestedID}</h1>		
			</Link>
		</>
	); 
}
export default NestedDetail;