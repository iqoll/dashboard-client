import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import Spinner from '../components/Spinner'

function Update() {
	const [product, setProduct] = useState({
		name: '',
		price: null,
		description: '',
		quantity: null,
	})
	const [isLoading, setIsLoading] = useState(null)

	const { user } = useAuthContext()

	const [id, setId] = useState(null)

	const handleId = (e) => {
		setId(e.target.value)
	}

	const navigate = useNavigate()

	console.log(id)

	const populateForm = async () => {
		if (!user) {
			return
		}

		try {
			const res = await axios.get(
				`https://dashboard-crud-57e7ed374405.herokuapp.com/products/${id}`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			)
			const data = res.data
			setProduct(data[0])
		} catch (error) {
			console.log(error)
		}
	}

	const handleChange = (event) => {
		const { name, value } = event.target
		setProduct((prevProduct) => ({
			...prevProduct,
			[name]: value,
		}))
	}

	const handleClick = async (e) => {
		e.preventDefault()

		if (!user) {
			return
		}

		setIsLoading(true)

		try {
			await axios.put(
				`https://dashboard-crud-57e7ed374405.herokuapp.com/products/${id}`,
				product,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			)
			navigate('/')
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
			<div className='flex flex-col items-center justify-center min-h-screen'>
				<h2 className='mb-4 font-bold text-2xl'>Update Product</h2>
				<div className='p-16 bg-slate-200 rounded-xl shadow-2xl'>
					<div className='flex mb-6'>
						<input
							className='p-2 mr-2 rounded-md'
							type='text'
							name='id'
							placeholder='insert ID here'
							onChange={handleId}
						/>
						<button
							onClick={populateForm}
							className='p-2 bg-blue-600 rounded-md text-white'
						>
							Get product info
						</button>
					</div>
					<div className='flex flex-col space-y-3'>
						<input
							className='p-2 rounded-md'
							type='text'
							name='name'
							value={product.name || ''}
							placeholder='name'
							onChange={handleChange}
							autoComplete='off'
						/>
						<input
							className='p-2 rounded-md'
							type='text'
							name='description'
							value={product.description || ''}
							placeholder='description'
							onChange={handleChange}
							autoComplete='off'
						/>
						<input
							className='p-2 rounded-md'
							type='number'
							name='price'
							value={product.price || ''}
							title='price'
							placeholder='price'
							onChange={handleChange}
						/>
						<input
							className='p-2 rounded-md'
							type='number'
							name='quantity'
							value={product.quantity || ''}
							title='quantity'
							placeholder='quantity'
							onChange={handleChange}
						/>
						<button
							onClick={handleClick}
							className='px-3 py-2 bg-blue-600 rounded-full text-white font-bold'
						>
							Add Product
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
export default Update
