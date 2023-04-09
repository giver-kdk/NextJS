import Link from 'next/link'
import {useRouter} from "next/router"
function Review()
{
	let router = useRouter();
	let {nested} = router.query;		// Access the "nested" during routing dynamically
	return (
		<>
			<Link href={`/dynamic_nested/${nested}/review/1`}>
				<h1>Review 1</h1>
			</Link>
			<Link href={`/dynamic_nested/${nested}/review/2`}>
				<h1>Review 2</h1>
			</Link>
			<Link href={`/dynamic_nested/${nested}/review/3`}>
				<h1>Review 3</h1>
			</Link>
		</>
	);
}
export default Review;