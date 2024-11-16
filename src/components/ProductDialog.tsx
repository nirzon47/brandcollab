import { MainDataType, ProductType } from '@/utils/types'
import { DialogContent, DialogDescription, DialogTitle } from './ui/Dialog'
import { useState } from 'react'
import Button from './ui/Button'

type ProductDialogPropType = {
	item: ProductType
	setData: (data: MainDataType) => void
	setDialogOpen: (open: boolean) => void
}

const ProductDialog = (props: ProductDialogPropType) => {
	const { item, setData, setDialogOpen } = props

	const [productName, setProductName] = useState<string>(item.name)
	const [productDesc, setProductDesc] = useState<string>(item.desc)
	const [productPrice, setProductPrice] = useState<number>(item.price)
	const [productCurrency, setProductCurrency] = useState<string>(item.currency)

	const handleSaveChangesClick = () => {
		if (!productName || !productPrice || !productCurrency) {
			alert('All fields except product description are required')
			return
		}

		const localData: MainDataType = JSON.parse(
			localStorage.getItem('data') as string
		)

		const product = localData.products.find((product) => product.id === item.id)

		if (!product) {
			alert('Error occured')
			return
		}

		product.name = productName
		product.desc = productDesc
		product.price = productPrice
		product.currency = productCurrency

		localData.products = localData.products.map((p) => {
			if (p.id === product.id) {
				return product
			}

			return p
		})

		localStorage.setItem('data', JSON.stringify(localData))

		setData(localData)
		setDialogOpen(false)
	}

	return (
		<DialogContent>
			<DialogTitle asChild>
				<h4 className='text-lg font-medium'>Edit Product</h4>
			</DialogTitle>
			<DialogDescription>
				<label
					htmlFor='product-name'
					className='mb-3 flex flex-col gap-1 text-xs'
				>
					Product Name
					<input
						className='rounded-md border px-2 py-1 text-base outline-none'
						type='text'
						name='product-name'
						id='product-name'
						value={productName}
						onChange={(e) => setProductName(e.target.value)}
					/>
				</label>
				<label
					htmlFor='product-description'
					className='mb-3 flex flex-col gap-1 text-xs'
				>
					Product Description
					<textarea
						className='rounded-md border px-2 py-1 text-base outline-none'
						name='product-description'
						id='product-description'
						rows={4}
						value={productDesc}
						onChange={(e) => setProductDesc(e.target.value)}
					></textarea>
				</label>
				<label
					htmlFor='product-price'
					className='mb-3 flex flex-col gap-1 text-xs'
				>
					Product Price
					<input
						className='rounded-md border px-2 py-1 text-base outline-none'
						type='number'
						name='product-price'
						id='product-price'
						value={productPrice}
						onChange={(e) => setProductPrice(Number(e.target.value))}
					/>
				</label>
				<label
					htmlFor='product-currency'
					className='mb-3 flex flex-col gap-1 text-xs'
				>
					Product Currency
					<input
						className='rounded-md border px-2 py-1 text-base outline-none'
						type='text'
						name='product-currency'
						id='product-currency'
						value={productCurrency}
						onChange={(e) => setProductCurrency(e.target.value)}
					/>
				</label>
				<Button
					variant='primary'
					className='mt-4 flex items-center justify-center'
					onClick={handleSaveChangesClick}
				>
					Save Changes
				</Button>
			</DialogDescription>
		</DialogContent>
	)
}

export default ProductDialog
