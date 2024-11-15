import { TestimonialType } from '@/utils/types'
import CardSection from './ui/CardSection'
import Heading from './ui/Heading'
import Button from './ui/Button'
import EditButton from './ui/EditButton'

type TestimonialsPropType = {
	testimonials: TestimonialType[]
}

const Testimonials = (props: TestimonialsPropType) => {
	return (
		<CardSection>
			<div className='flex items-center justify-between'>
				<Heading title='Testimonials' className='mb-4' />
				<EditButton
					action={() => {
						return
					}}
				/>
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
