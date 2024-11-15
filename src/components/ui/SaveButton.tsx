import { TbCheck } from 'react-icons/tb'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './Tooltip'

type SaveButtonPropType = {
	action: () => void
}

const SaveButton = (props: SaveButtonPropType) => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<TbCheck
						onClick={() => props.action()}
						className='h-6 w-6 cursor-pointer text-zinc-600'
					/>
				</TooltipTrigger>
				<TooltipContent>
					<p className='text-sm font-medium'>Save changes</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

export default SaveButton
