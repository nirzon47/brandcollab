import { useState } from 'react'
import Button from './ui/Button'
import CardSection from './ui/CardSection'
import Heading from './ui/Heading'
import { TbPlus } from 'react-icons/tb'
import { MainDataType } from '@/utils/types'

type CollaboratesPropType = {
	data: string[]
	setData: (data: MainDataType) => void
}

const Collaborates = (props: CollaboratesPropType) => {
	const [editMode, setEditMode] = useState<boolean>(false)
	const [inputValue, setInputValue] = useState<string>('')

	const handleSaveChangesClick = () => {
		setEditMode(false)

		if (!inputValue) {
			return
		}

		const newTags = [...props.data, inputValue]

		const localData = JSON.parse(localStorage.getItem('data') as string)
		localData.collaborates = newTags
		localStorage.setItem('data', JSON.stringify(localData))

		props.setData(localData)
		setInputValue('')
	}

	return (
		<CardSection>
			<Heading title='Previous Collaborates' className='mb-4' />
			<div className='flex flex-wrap gap-2'>
				{props.data.map((item) => (
					<span
						key={item}
						className='flex items-center justify-center rounded-full bg-accent px-4 py-1.5 text-xs text-zinc-600'
					>
						{item}
					</span>
				))}
				{editMode && (
					<input
						type='text'
						className='w-fit rounded-full bg-accent px-4 py-1.5 text-xs text-zinc-600 outline-none'
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
				)}
				{!editMode ? (
					<Button variant='secondary' onClick={() => setEditMode(true)}>
						<TbPlus /> Add Previous Collaborate
					</Button>
				) : (
					<Button variant='primary' onClick={handleSaveChangesClick}>
						Save Changes
					</Button>
				)}
			</div>
		</CardSection>
	)
}

export default Collaborates
