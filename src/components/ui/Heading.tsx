import { cn } from '@/utils/cn'

type HeadingProps = {
	title: string
	className?: string
}

const Heading = (props: HeadingProps) => {
	return (
		<h2 className={cn('text-2xl font-semibold', props.className)}>
			{props.title}
		</h2>
	)
}

export default Heading
