import Button from './ui/Button'
import CardSection from './ui/CardSection'
import Heading from './ui/Heading'
import { TbPlus } from 'react-icons/tb'

const Collaborates = (props: { data: string[] }) => {
	return (
		<CardSection>
			<Heading title='Previous Collaborates' className='mb-4' />
			<div className='flex flex-wrap gap-2'>
				{props.data.map((item) => (
					<span
						key={item}
						className='bg-accent flex items-center justify-center rounded-full px-4 py-1.5 text-xs text-zinc-600'
					>
						{item}
					</span>
				))}
				<Button variant='secondary'>
					<TbPlus /> Add Previous Collaborate
				</Button>
			</div>
		</CardSection>
	)
}

export default Collaborates
