import { useState } from 'react'
import CardSection from './ui/CardSection'
import Heading from './ui/Heading'
import EditButton from './ui/EditButton'
import SaveButton from './ui/SaveButton'

const About = (props: { desc: string }) => {
	const [editMode, setEditMode] = useState<boolean>(false)

	return (
		<CardSection>
			<div className='flex items-center justify-between'>
				<Heading title='About' className='mb-2' />
				{editMode ? (
					<SaveButton action={() => setEditMode(false)} />
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
