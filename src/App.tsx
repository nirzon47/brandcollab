import { useEffect, useState } from 'react'
import { MainDataType } from '@/utils/types'
import { initialData } from '@/utils/initialData'
import ProfileHeader from '@/components/ProfileHeader'
import About from '@/components/About'

const App = () => {
	const [data, setData] = useState<MainDataType>(initialData)

	useEffect(() => {
		const localData = localStorage.getItem('data')

		if (localData) {
			setData(JSON.parse(localData))
		} else {
			localStorage.setItem('data', JSON.stringify(initialData))
		}
	}, [])

	return (
		<div className='bg-background min-h-screen p-16'>
			<div className='mx-auto flex h-full w-full max-w-5xl flex-col gap-8'>
				<ProfileHeader profile={data.profile} />
				<About desc={data.about} />
			</div>
		</div>
	)
}

export default App
