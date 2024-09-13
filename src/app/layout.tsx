import { ReactNode } from 'react'
import { Montserrat_Alternates } from 'next/font/google'
import clsx from 'clsx'
import './globals.css'

const montserratAlternates = Montserrat_Alternates({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--font-montserrat-alternates',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en">
			<body className={clsx(montserratAlternates.className, montserratAlternates.variable)}>
				{children}
			</body>
		</html>
	)
}
