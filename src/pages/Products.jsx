import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuthContext } from '../hooks/useAuthContext'
import Spinner from '../components/Spinner'

function Products() {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(null)
	const { user } = useAuthContext()

	useEffect(() => {
		const fetchAllProducts = async () => {
			try {
				const res = await axios.get(
					`https://dashboard-crud-57e7ed374405.herokuapp.com/products`,
					{
						headers: {
							Authorization: `Bearer ${user.token}`,
						},
					}
				)
				setProducts(res.data)
			} catch (error) {
				console.log(error)
			}
		}
		if (user) {
			fetchAllProducts()
		}
	}, [user])

	const handleDelete = async (id) => {
		if (!user) {
			return
		}

		setIsLoading(true)

		try {
			await axios.delete(
				`https://dashboard-crud-57e7ed374405.herokuapp.com/products/${id}`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			)
			window.location.reload()
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		<>
			<div className='mt-16 flex justify-center'>
				<div className='flex flex-col space-y-3'>
					<h1 className='mb-6 w-full text-center text-2xl bg-blue-500 text-white'>
						Products Wishlist
					</h1>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
						{products.map((product) => (
							<div
								key={product.id}
								className='bg-slate-200 p-6 rounded-md shadow-2xl relative'
							>
								<h2>
									ID: <span className='font-thin'>{product.id}</span>
								</h2>
								<h2 className='font-semibold mb-1'>{product.name}</h2>
								<p>
									<span className='font-semibold'>Description:</span>{' '}
									{product.description}
								</p>
								<p>Price: ${product.price}</p>
								<p>quantity: {product.quantity}</p>
								<button
									onClick={() => handleDelete(product.id)}
									className='group absolute top-1 right-1 flex items-center justify-center w-8 h-8 bg-white rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-6 h-6 text-black group-hover:text-gray-600'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
										fill='none'
										strokeLinecap='round'
										strokeLinejoin='round'
									>
										<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
										<line x1='18' y1='6' x2='6' y2='18'></line>
										<line x1='6' y1='6' x2='18' y2='18'></line>
									</svg>
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
export default Products
