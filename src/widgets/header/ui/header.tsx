import type { FC } from 'react'
import { LogoDash } from '@/shared/ui/logo-dash/logo-dash'
import { Nav } from '@/widgets/header/ui/nav/nav'
import { SmallAvatar } from '@/shared/ui/small-avatar/small-avatar'
import style from './header.module.css'

// face data
import avatar from '@/shared/img/other/avatars/male/1.png'

// TODO: "1" Adapt Header and Nav - if we click on small-avatar open Nav
export const Header: FC = () => {
	return (
		<header className={style.header}>
			<LogoDash />
			<div className={style.header__right}>
				<Nav />
				<SmallAvatar avatarUrl={avatar} />
			</div>
		</header>
	)
}
