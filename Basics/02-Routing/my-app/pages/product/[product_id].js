// Dynamically Routing Page
// 1st "Next" will search for existing "product_id" named file in the directory
// If file is not found then it uses this dynamically routing page
// To route, goto "product/1", "product/2", "product/3", etc
import {useRouter} from 'next/router'				// Import this hook for accessing "product_id"
function ProductsDetail()
{
	let router = useRouter();
	let productID = router.query.product_id;		// Access the product_id during routing dynamically
	return <h1>Product Detail for ID: {productID}</h1>
}
export default ProductsDetail;