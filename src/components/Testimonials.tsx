import { TestimonialType } from '@/utils/types'
import CardSection from './ui/CardSection'
import Heading from './ui/Heading'
import { TbEdit } from 'react-icons/tb'
import Button from './ui/Button'

type TestimonialsPropType = {
	testimonials: TestimonialType[]
}

const Testimonials = (props: TestimonialsPropType) => {
	return (
		<CardSection>
			<div className='flex items-center justify-between'>
				<Heading title='Testimonials' className='mb-4' />
				<TbEdit className='h-6 w-6 cursor-pointer text-zinc-600' />
			</div>
			<div className='mb-4'>
				{props.testimonials.map((item) => (
					<div key={item.name}>
						<blockquote className='mb-2 text-sm italic text-zinc-500'>
							"{item.desc}"
						</blockquote>
						<p className='text-right text-sm font-semibold'>
							- {item.name}, {item.company}
						</p>
					</div>
				))}
			</div>
			<Button
				variant='secondary'
				className='flex w-full items-center justify-center'
			>
				Add Testimonial
			</Button>
		</CardSection>
	)
}

export default Testimonials
