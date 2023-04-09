// Dynamically Routing Page
// 1st "Next" will search for existing "review_id" named file in the directory
// If file is not found then it uses this dynamically routing page
// To route, goto "review/1", "review/2", "review/3", etc
import {useRouter} from 'next/router'				// Import this hook for accessing "review_id"
function ReviewDetail()
{
	let router = useRouter();
	let {nested, review_id} = router.query;		// Access the "nested" during routing dynamically
	return <h1>Nested Page: {nested} has Review Detail: {review_id}</h1>
}
export default ReviewDetail;