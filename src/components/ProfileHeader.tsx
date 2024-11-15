import { MainDataType, ProfileType } from '@/utils/types'
import { useState } from 'react'
import Heading from './ui/Heading'
import CardSection from './ui/CardSection'
import EditButton from './ui/EditButton'
import SaveButton from './ui/SaveButton'

type ProfileHeaderProps = {
	profile: ProfileType
	setData: (data: MainDataType) => void
}

const ProfileHeader = (props: ProfileHeaderProps) => {
	const { profile } = props

	const [editMode, setEditMode] = useState<boolean>(false)
	const [inputValue, setInputValue] = useState<string>('')

	const handleSaveChangesClick = () => {
		setEditMode(false)

		if (!inputValue) {
			return
		}

		const newTags = [...profile.tags, inputValue]

		const localData = JSON.parse(localStorage.getItem('data') as string)
		localData.profile.tags = newTags
		localStorage.setItem('data', JSON.stringify(localData))

		props.setData(localData)
		setInputValue('')
	}

	return (
		<CardSection>
			<div className='mb-2 flex items-center justify-between'>
				<Heading title={profile.name} />
				{editMode ? (
					<SaveButton action={handleSaveChangesClick} />
				) : (
					<EditButton action={() => setEditMode(true)} />
				)}
			</div>
			<p className='mb-1 text-sm text-zinc-500'>{profile.desc}</p>
			<p className='text-sm text-zinc-500'>{profile.location}</p>

			<div className='mt-3 flex flex-wrap gap-2'>
				{profile.tags.map((tag) => (
					<span
						key={tag}
						className='bg-accent rounded-full px-4 py-1.5 text-xs text-zinc-600'
					>
						{tag}
					</span>
				))}
				{editMode && (
					<input
						type='text'
						className='bg-accent w-fit rounded-full px-4 py-1.5 text-xs text-zinc-600 outline-none'
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
				)}
			</div>
		</CardSection>
	)
}

export default ProfileHeader
