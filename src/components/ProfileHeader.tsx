import { ProfileType } from '@/utils/types'
import { useState } from 'react'
import { TbEdit } from 'react-icons/tb'
import { TbCheck } from 'react-icons/tb'

type ProfileHeaderProps = {
	profile: ProfileType
}

const ProfileHeader = (props: ProfileHeaderProps) => {
	const { profile } = props

	const [editMode, setEditMode] = useState<boolean>(false)

	return (
		<section className='rounded-2xl bg-white px-8 py-4'>
			<div className='mb-2 flex items-center justify-between'>
				<h1 className='text-2xl font-semibold'>{profile.name}</h1>
				{editMode ? (
					<TbCheck className='h-6 w-6 cursor-pointer text-zinc-600' />
				) : (
					<TbEdit
						className='h-6 w-6 cursor-pointer text-zinc-600'
						onClick={() => setEditMode(true)}
					/>
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
		</section>
	)
}

export default ProfileHeader
