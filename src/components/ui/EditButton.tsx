import { TbEdit } from 'react-icons/tb'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './Tooltip'

type EditButtonPropType = {
	action: () => void
}

const EditButton = (props: EditButtonPropType) => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<TbEdit
						onClick={() => props.action()}
						className='h-6 w-6 cursor-pointer text-zinc-600'
					/>
				</TooltipTrigger>
				<TooltipContent>
					<p className='text-sm font-medium'>Edit</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

export default EditButton
