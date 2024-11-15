import { useState } from 'react'
import CardSection from './ui/CardSection'
import Heading from './ui/Heading'
import EditButton from './ui/EditButton'
import SaveButton from './ui/SaveButton'
import { MainDataType } from '@/utils/types'

type AboutPropType = {
	desc: string
	setData: (data: MainDataType) => void
}

const About = (props: AboutPropType) => {
	const [editMode, setEditMode] = useState<boolean>(false)
	const [textareaValue, setTextAreaValue] = useState<string>(props.desc)

	const handleSaveButtonClick = () => {
		setEditMode(false)

		const localData = JSON.parse(localStorage.getItem('data') as string)
		localData.about = textareaValue
		localStorage.setItem('data', JSON.stringify(localData))

		props.setData(localData)
	}

	return (
		<CardSection>
			<div className='flex items-center justify-between'>
				<Heading title='About' className='mb-2' />
				{editMode ? (
					<SaveButton action={handleSaveButtonClick} />
				) : (
					<EditButton action={() => setEditMode(true)} />
				)}
			</div>
			{!editMode ? (
				<p className='mb-4 max-w-3xl text-sm font-medium text-zinc-500'>
					{props.desc}
				</p>
			) : (
				<textarea
					className='w-full resize-none rounded-lg border px-2 py-1 text-sm font-medium text-zinc-500 outline-none'
					value={textareaValue}
					onChange={(e) => setTextAreaValue(e.target.value)}
				></textarea>
			)}
		</CardSection>
	)
}

export default About
