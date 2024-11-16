import { MainDataType, ProductType } from '@/utils/types'
import Button from './ui/Button'
import { Dialog, DialogTrigger } from './ui/Dialog'
import { TbEdit } from 'react-icons/tb'
import ProductDialog from './ProductDialog'
import { useState } from 'react'

type ProductCardPropType = {
	item: ProductType
	setData: (data: MainDataType) => void
}

const ProductCard = (props: ProductCardPropType) => {
	const { item, setData } = props

	const [dialogOpen, setDialogOpen] = useState<boolean>(false)

	return (
		<div>
			<div className='flex items-center justify-between'>
				<h3 className='mb-2 text-lg font-medium text-zinc-700 md:text-xl'>
					{item.name}
				</h3>
				<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
					<DialogTrigger onClick={() => setDialogOpen(true)}>
						<TbEdit className='h-6 w-6 cursor-pointer text-zinc-600' />
					</DialogTrigger>
					<ProductDialog
						item={item}
						setData={setData}
						setDialogOpen={setDialogOpen}
					/>
				</Dialog>
			</div>
			<div className='relative'>
				<textarea
					name='product-description'
					id='product-description'
					rows={4}
					className='w-full resize-none rounded-lg border border-zinc-300 p-4 text-sm text-zinc-600 outline-none'
					placeholder='Example here .....'
					value={item.desc}
					readOnly
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
