import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<>
			<div className='flex justify-center items-center p-5 md:justify-start bg-slate-900 space-x-3'>
				<button className='bg-blue-500 p-3 rounded-md text-white hover:bg-blue-300 hover:-translate-y-0.5 hover:text-black transition duration-150'>
					<Link to={'/add'}>Add New Product</Link>
				</button>
				<button className='bg-blue-500 p-3 rounded-md text-white hover:bg-blue-300 hover:-translate-y-0.5 hover:text-black transition duration-150'>
					<Link to={'/update'}>Update Product</Link>
				</button>
			</div>
		</>
	)
}
export default Navbar
