import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

function Products() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchAllProducts = async () => {
			try {
				const res = await axios.get(
					`${process.env.REACT_APP_BACKEND_ROUTE}/products`
				)
				setProducts(res.data)
				console.log(res.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchAllProducts()
	}, [])

	return (
		<div>
			<Navbar />
			<div className='mt-16 flex justify-center items-center '>
				<div className='flex flex-col space-y-3'>
					<h1 className='text-center text-2xl bg-blue-500 text-white'>
						Products
					</h1>
					{products.map((product) => (
						<div className='flex flex-col' key={product.id}>
							<h2>{product.name}</h2>
							<p>{product.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
export default Products
