import { cn } from '@/utils/cn'

type HeadingProps = {
	title: string
	className?: string
}

const Heading = (props: HeadingProps) => {
	return (
		<h2 className={cn('text-xl font-semibold md:text-2xl', props.className)}>
			{props.title}
		</h2>
	)
}

export default Heading
