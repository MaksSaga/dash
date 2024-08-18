import { ReactNode } from 'react'
import { Header } from '@/widgets/header/ui/header'
import { UserCard } from '@/widgets/user-card/ui/user-card'
import { MyGoals } from '@/widgets/my-goals/ui/my-goals'
import style from './layout.module.css'

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<div className={style.layout}>
			<div className={style.header}>
				<Header />
			</div>
			<div className={style.user_card}>
				<UserCard />
			</div>
			<div className={style.my_goals}>
				<MyGoals />
			</div>
			<div className={style.children}>{children}</div>
		</div>
	)
}
