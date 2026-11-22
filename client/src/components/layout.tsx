import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {
	Home,
	Clapperboard,
	Heart,
	Settings,
	Search,
	Menu,
	Bell,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetTitle,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navItems = [
	{ to: '/', label: 'Главная', icon: Home },
	{ to: '/movies', label: 'Фильмы', icon: Clapperboard },
	{ to: '/favorites', label: 'Избранное', icon: Heart },
]

function NavList({ pathname }: { pathname: string }) {
	return (
		<nav className='flex flex-col gap-1'>
			{navItems.map(item => {
				const active = pathname === item.to
				return (
					<a
						key={item.to}
						href={item.to}
						className={cn(
							'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
							active
								? 'bg-secondary text-secondary-foreground'
								: 'text-muted-foreground hover:bg-secondary hover:text-secondary-foreground',
						)}
					>
						<item.icon className='size-4' />
						{item.label}
					</a>
				)
			})}
		</nav>
	)
}

export function Layout() {
	const [open, setOpen] = useState(false)

	return (
		<div className='flex min-h-svh'>
			{/* Сайдбар — десктоп */}
			<aside className='fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r bg-card md:flex'>
				<div className='flex h-14 items-center gap-2 border-b px-4 font-semibold'>
					<Clapperboard className='size-5' />
					Кинотеатр
				</div>
				<div className='flex-1 overflow-y-auto p-2'>
					<NavList pathname={location.pathname} />
				</div>
				<div className='p-2'>
					<Separator />
					<a
						href='/settings'
						className='mt-2 flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground'
					>
						<Settings className='size-4' />
						Настройки
					</a>
				</div>
			</aside>

			{/* Правая часть */}
			<div className='flex min-h-svh flex-1 flex-col md:pl-60'>
				{/* Шапка */}
				<header className='sticky top-0 z-20 flex h-14 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur'>
					{/* Кнопка мобильного меню */}
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild>
							<Button variant='ghost' size='icon' className='md:hidden'>
								<Menu className='size-5' />
								<span className='sr-only'>Открыть меню</span>
							</Button>
						</SheetTrigger>
						<SheetContent side='left' className='w-60 p-2'>
							<SheetTitle className='sr-only'>Навигация</SheetTitle>
							<NavList pathname={location.pathname} />
						</SheetContent>
					</Sheet>

					{/* Поиск */}
					<div className='relative ml-2 hidden flex-1 sm:block'>
						<Search className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />
						<input
							type='search'
							placeholder='Поиск...'
							className='h-9 w-full max-w-sm rounded-md border bg-background pl-9 pr-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring'
						/>
					</div>

					<div className='ml-auto flex items-center gap-1'>
						<Button variant='ghost' size='icon'>
							<Bell className='size-4' />
							<span className='sr-only'>Уведомления</span>
						</Button>
						<Button variant='ghost' size='icon' className='rounded-full'>
							<Avatar className='size-8'>
								<AvatarFallback>ИИ</AvatarFallback>
							</Avatar>
						</Button>
					</div>
				</header>

				{/* Контент */}
				<main className='flex-1 p-4 md:p-6'>
					<Outlet />
				</main>
			</div>
		</div>
	)
}
