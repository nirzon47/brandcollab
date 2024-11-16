import { TbPlus } from 'react-icons/tb'
import Button from './ui/Button'
import CardSection from './ui/CardSection'
import Heading from './ui/Heading'
import { MainDataType, ProductType } from '@/utils/types'
import ProductCard from './ProductCard'

type StartCollabPropTypes = {
	products: ProductType[]
	setData: (data: MainDataType) => void
}

const StartCollab = (props: StartCollabPropTypes) => {
	const handleAddProductClick = () => {
		const localData = JSON.parse(localStorage.getItem('data') as string)

		localData.products.push({
			id: localData.products.length + 1,
			name: `Product #${localData.products.length + 1}`,
			price: 0,
			currency: 'USD',
			desc: '',
		})

		localStorage.setItem('data', JSON.stringify(localData))
		props.setData(localData)
	}

	return (
		<CardSection>
			<Heading title='Lets Collaborate' className='mb-4' />
			<Button variant='secondary' onClick={handleAddProductClick}>
				<TbPlus /> Add product
			</Button>
			<div className='mt-6 flex flex-col gap-4'>
				{props.products.map((item) => (
					<ProductCard setData={props.setData} item={item} key={item.id} />
				))}
			</div>
		</CardSection>
	)
}

export default StartCollab
