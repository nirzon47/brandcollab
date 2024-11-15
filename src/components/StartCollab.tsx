import { TbPlus } from 'react-icons/tb'
import Button from './ui/Button'
import CardSection from './ui/CardSection'
import Heading from './ui/Heading'
import { ProductType } from '@/utils/types'
import ProductCard from './ProductCard'

type StartCollabPropTypes = {
	products: ProductType[]
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
					<ProductCard key={item.name} item={item} />
				))}
			</div>
		</CardSection>
	)
}

export default StartCollab
