import { cn } from '@/utils/cn'

type ButtonProps = {
	children?: React.ReactNode
	className?: string
	onClick?: () => void
	disabled?: boolean
	variant?: 'primary' | 'secondary'
}

const Button = (props: ButtonProps) => {
	return (
		<button
			className={cn(
				'flex items-center gap-2 rounded-lg px-4 py-2 text-sm duration-150 hover:bg-opacity-80',
				props.variant === 'primary' && 'bg-primary text-white',
				props.variant === 'secondary' && 'bg-secondary text-white',
				props.className
			)}
		>
			{props.children}
		</button>
	)
}

export default Button
