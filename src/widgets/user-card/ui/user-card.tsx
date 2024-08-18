import type { FC } from 'react'
import Image from '@/shared/utils/image'
import style from './user-card.module.css'
import avatar from '@/shared/img/other/avatars/male/1.png'

interface UserCardProps {
	username: string
	balance: number
	avatar: string
}

export const UserCard: FC = () => {
	return (
		<div className={style.block}>
			<h2 className={style.username}>Maksym</h2>
			<h3 className={style.balance}>$347.00</h3>
			<Image className={style.avatar} src={avatar} alt="Maksym" />
		</div>
	)
}
