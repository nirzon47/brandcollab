import { ProductType } from '@/utils/types'
import { useState } from 'react'
import { TbCheck, TbEdit } from 'react-icons/tb'
import Button from './ui/Button'

const ProductCard = (props: { item: ProductType }) => {
	const { item } = props

	const [editMode, setEditMode] = useState<boolean>(false)

	return (
		<div key={item.name}>
			<div className='flex items-center justify-between'>
				<h3 className='mb-2 text-lg font-medium text-zinc-700 md:text-xl'>
					{item.name}
				</h3>
				{editMode ? (
					<TbCheck className='h-6 w-6 cursor-pointer text-zinc-600' />
				) : (
					<TbEdit
						className='h-6 w-6 cursor-pointer text-zinc-600'
						onClick={() => setEditMode(true)}
					/>
				)}
			</div>
			<div className='relative'>
				<textarea
					name='product-description'
					id='product-description'
					rows={4}
					className='w-full resize-none rounded-lg border border-zinc-300 p-4 text-sm text-zinc-600 outline-none'
					placeholder='Example here .....'
					value={item.desc}
				></textarea>
				<p className='absolute bottom-4 right-4 font-semibold text-zinc-600'>
					{item.currency} {item.price}
				</p>
			</div>
			<div className='flex items-center justify-end'>
				<Button variant='primary'>Book Now</Button>
			</div>
		</div>
	)
}

export default ProductCard
