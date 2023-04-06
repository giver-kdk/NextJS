// Dynamically Routing Page
// 1st "Next" will search for existing "review_id" named file in the directory
// If file is not found then it uses this dynamically routing page
// To route, goto "review/1", "review/2", "review/3", etc
import {useRouter} from 'next/router'				// Import this hook for accessing "review_id"
function ReviewDetail()
{
	let router = useRouter();
	let nestedID = router.query.nested;			// Access the "nested" of parent folder
	let reviewID = router.query.review_id;		// Access the "review_id" during routing dynamically
	return <h1>Nested Page: {nestedID} has Review Detail: {reviewID}</h1>
}
export default ReviewDetail;