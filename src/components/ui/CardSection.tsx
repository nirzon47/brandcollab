const CardSection = (props: { children: React.ReactNode }) => {
	return (
		<section className='rounded-2xl bg-white px-8 py-6'>
			{props.children}
		</section>
	)
}

export default CardSection
