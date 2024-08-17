import { ReactNode } from 'react'
import { Header } from '@/widgets/header/ui/header'
import { UserCard } from '@/widgets/user-card/ui/user-card'
import { MyGoals } from '@/widgets/my-goals/ui/my-goals'

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<div>
			<Header />
			<UserCard />
			<MyGoals />
			{children}
		</div>
	)
}
