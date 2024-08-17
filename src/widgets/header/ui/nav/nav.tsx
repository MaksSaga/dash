import type { FC } from 'react'
import Link from 'next/link'
import style from './nav.module.css'

export const Nav: FC = () => {
	return (
		<nav>
			<ul className={style.list}>
				<li className={style.list__item}>
					<Link className={style.list__link} href="/">
						dashboard
					</Link>
				</li>
				<li className={style.list__item}>
					<Link className={style.list__link} href="/transaction">
						transactions
					</Link>
				</li>
				<li className={style.list__item}>
					<Link className={style.list__link} href="/upcoming-transaction">
						upcoming transactions
					</Link>
				</li>
				<li className={style.list__item}>
					<Link className={style.list__link} href="/goals">
						goals
					</Link>
				</li>
			</ul>
		</nav>
	)
}
