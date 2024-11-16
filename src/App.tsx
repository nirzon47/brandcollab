import { useEffect, useState } from 'react'
import { MainDataType } from '@/utils/types'
import { initialData } from '@/utils/initialData'
import ProfileHeader from '@/components/ProfileHeader'
import About from '@/components/About'
import Collaborates from '@/components/Collaborates'
import StartCollab from '@/components/StartCollab'
import Testimonials from './components/Testimonials'

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
		<div className='min-h-screen bg-background p-4 md:p-16'>
			<div className='mx-auto flex h-full w-full max-w-5xl flex-col gap-8'>
				<ProfileHeader profile={data.profile} setData={setData} />
				<About desc={data.about} setData={setData} />
				<Collaborates data={data.collaborates} setData={setData} />
				<StartCollab products={data.products} setData={setData} />
				<Testimonials testimonials={data.testimonials} />
			</div>
		</div>
	)
}

export default App
