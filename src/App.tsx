import { useEffect, useState } from 'react'
import ProfileHeader from './components/ProfileHeader'
import { MainDataType } from './utils/types'
import { initialData } from './utils/initialData'

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
			<div className='mx-auto h-full w-full max-w-5xl'>
				<ProfileHeader profile={data.profile} />
			</div>
		</div>
	)
}

export default App
