import { ReactNode } from 'react'

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<div>
			<h2>Layout</h2>
			{children}
		</div>
	)
}
