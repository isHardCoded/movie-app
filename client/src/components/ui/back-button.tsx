import { ArrowLeft } from 'lucide-react'
import { Button } from './button'
import { useNavigate } from 'react-router-dom'
import { cn } from 'cn'

type ButtonVariant = 'default' | 'small' | 'large'

interface BackButton {
	className: string
	variant: ButtonVariant
	fallback: string
}

export function BackButton({
	className = '',
	fallback = '/',
	variant = 'default',
}) {
	const navigate = useNavigate()

	const goBack = () => {
		if (window.history.length > 1) {
			navigate(-1)
		} else {
			navigate(fallback, { replace: true })
		}
	}

	if (variant === 'default') {
		return (
			<Button
				className={cn(
					'flex items-center gap-1 p-5 rounded-lg border-white/30 bg-white/10 text-xl hover:bg-white/20',
					className,
				)}
				onClick={goBack}
			>
				<p className='text-sm'>Назад</p>
			</Button>
		)
	}

	if (variant === 'small') {
		return (
			<Button
				className={cn(
					'flex items-center gap-1 p-5 rounded-lg border-white/30 bg-white/10 text-xl hover:bg-white/20',
					className,
				)}
				onClick={goBack}
			>
				<ArrowLeft />
			</Button>
		)
	}

	if (variant === 'large') {
		return (
			<Button
				className={cn(
					'flex items-center gap-1 p-5 rounded-lg border-white/30 bg-white/10 text-xl hover:bg-white/20',
					className,
				)}
				onClick={goBack}
			>
				<ArrowLeft />
				<p className='text-sm'>Назад</p>
			</Button>
		)
	}
}
