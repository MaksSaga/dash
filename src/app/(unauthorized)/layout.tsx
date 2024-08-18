import { ReactNode } from 'react'
import { AuthenticationHeader } from '@/widgets/authentication/header/ui/authentication-header'
import style from './layout.module.css'

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<div className={style.wrapper}>
			<AuthenticationHeader currentStep={1} maxStep={3} />
			{children}
		</div>
	)
}
