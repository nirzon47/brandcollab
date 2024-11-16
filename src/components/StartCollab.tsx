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
	return (
		<CardSection>
			<Heading title='Lets Collaborate' className='mb-4' />
			<Button variant='secondary'>
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
