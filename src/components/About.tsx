import { useState } from 'react'
import CardSection from './ui/CardSection'
import Heading from './ui/Heading'
import { TbCheck } from 'react-icons/tb'
import EditButton from './ui/EditButton'

const About = (props: { desc: string }) => {
	const [editMode, setEditMode] = useState<boolean>(false)

	return (
		<CardSection>
			<div className='flex items-center justify-between'>
				<Heading title='About' className='mb-2' />
				{editMode ? (
					<TbCheck className='h-6 w-6 cursor-pointer text-zinc-600' />
				) : (
					<EditButton action={() => setEditMode(true)} />
				)}
			</div>
			<p className='mb-4 max-w-3xl text-sm font-medium text-zinc-500'>
				{props.desc}
			</p>
		</CardSection>
	)
}

export default About
