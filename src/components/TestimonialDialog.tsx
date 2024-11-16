import { DialogContent, DialogDescription, DialogTitle } from './ui/Dialog'
import Button from './ui/Button'
import { useState } from 'react'
import { MainDataType } from '@/utils/types'

type TestimonialDialogPropType = {
	setDialogOpen: (open: boolean) => void
	setData: (data: MainDataType) => void
}

const TestimonialDialog = (props: TestimonialDialogPropType) => {
	const { setDialogOpen, setData } = props

	const [author, setAuthor] = useState<string>('')
	const [testimony, setTestimony] = useState<string>('')
	const [designation, setDesignation] = useState<string>('')

	const handleAddTestimonialClick = () => {
		if (!author || !testimony || !designation) {
			alert('All fields are required')
			return
		}

		const localData = JSON.parse(localStorage.getItem('data') as string)

		localData.testimonials.push({
			id: localData.testimonials.length + 1,
			name: author,
			company: designation,
			desc: testimony,
		})

		localStorage.setItem('data', JSON.stringify(localData))
		setData(localData)

		setDialogOpen(false)
	}

	return (
		<DialogContent>
			<DialogTitle asChild>
				<h4 className='text-lg font-medium'>Edit Product</h4>
			</DialogTitle>
			<DialogDescription>
				<label htmlFor='author' className='mb-3 flex flex-col gap-1 text-xs'>
					Author
					<input
						className='rounded-md border px-2 py-1 text-base outline-none'
						type='text'
						name='author'
						id='author'
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					/>
				</label>
				<label htmlFor='testimony' className='mb-3 flex flex-col gap-1 text-xs'>
					Testimony
					<textarea
						className='rounded-md border px-2 py-1 text-base outline-none'
						name='testimony'
						id='testimony'
						rows={4}
						value={testimony}
						onChange={(e) => setTestimony(e.target.value)}
					></textarea>
				</label>
				<label
					htmlFor='designation'
					className='mb-3 flex flex-col gap-1 text-xs'
				>
					Author's Designation/Company
					<input
						className='rounded-md border px-2 py-1 text-base outline-none'
						type='text'
						name='designation'
						id='designation'
						value={designation}
						onChange={(e) => setDesignation(e.target.value)}
					/>
				</label>
				<Button
					variant='primary'
					className='mt-4 flex items-center justify-center'
					onClick={handleAddTestimonialClick}
				>
					Add
				</Button>
			</DialogDescription>
		</DialogContent>
	)
}

export default TestimonialDialog
