import { ProfileType } from '@/utils/types'
import { useState } from 'react'
import Heading from './ui/Heading'
import CardSection from './ui/CardSection'
import EditButton from './ui/EditButton'
import SaveButton from './ui/SaveButton'

type ProfileHeaderProps = {
	profile: ProfileType
}

const ProfileHeader = (props: ProfileHeaderProps) => {
	const { profile } = props

	const [editMode, setEditMode] = useState<boolean>(false)

	return (
		<CardSection>
			<div className='mb-2 flex items-center justify-between'>
				<Heading title={profile.name} />
				{editMode ? (
					<SaveButton action={() => setEditMode(false)} />
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
			</div>
		</CardSection>
	)
}

export default ProfileHeader
