import { MainDataType, TestimonialType } from '@/utils/types'
import CardSection from './ui/CardSection'
import Heading from './ui/Heading'
import Button from './ui/Button'
import { useState } from 'react'
import { Dialog } from './ui/Dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'
import TestimonialDialog from './TestimonialDialog'

type TestimonialsPropType = {
	testimonials: TestimonialType[]
	setData: (data: MainDataType) => void
}

const Testimonials = (props: TestimonialsPropType) => {
	const [dialogOpen, setDialogOpen] = useState<boolean>(false)

	return (
		<CardSection>
			<div className='flex items-center justify-between'>
				<Heading title='Testimonials' className='mb-4' />
			</div>
			<div className='mb-4 flex flex-col gap-4'>
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
			<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
				<DialogTrigger asChild>
					<Button
						variant='secondary'
						className='flex w-full items-center justify-center'
					>
						Add Testimonial
					</Button>
				</DialogTrigger>
				<TestimonialDialog
					setDialogOpen={setDialogOpen}
					setData={props.setData}
				/>
			</Dialog>
		</CardSection>
	)
}

export default Testimonials
