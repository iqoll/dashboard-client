import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Add() {
	const [product, setProduct] = useState({
		name: '',
		price: null,
		description: '',
		quantity: null,
	})

	const navigate = useNavigate()

	const handleChange = (e) => {
		setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleClick = async (e) => {
		e.preventDefault()
		try {
			await axios.post(
				`https://dashboard-crud-57e7ed374405.herokuapp.com/products`,
				product
			)
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}

	console.log(product)

	return (
		<>
			<div className='flex flex-col items-center justify-center min-h-screen'>
				<h2 className='mb-4 font-bold text-2xl'>Add a New Product</h2>
				<div className='p-16 bg-slate-200 rounded-xl shadow-2xl'>
					<div className='flex flex-col space-y-3'>
						<input
							className='p-2 rounded-md'
							type='text'
							name='name'
							placeholder='name'
							onChange={handleChange}
						/>
						<input
							className='p-2 rounded-md'
							type='text'
							name='description'
							placeholder='description'
							onChange={handleChange}
						/>
						<input
							className='p-2 rounded-md'
							type='number'
							name='price'
							title='price'
							placeholder='price'
							onChange={handleChange}
						/>
						<input
							className='p-2 rounded-md'
							type='number'
							name='quantity'
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
export default Add
