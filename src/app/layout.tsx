import { ReactNode } from 'react'
import { Montserrat_Alternates } from 'next/font/google'
import './globals.css'
import { Header } from '@/widgets/header/ui/header'

const montserratAlternates = Montserrat_Alternates({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en">
			<body className={montserratAlternates.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
