import type { FC } from 'react'
import style from './button-auth-test-dash.module.css'

interface ButtonAuthTestDashProps {
	fnCallback: () => void
}

export const ButtonAuthTestDash: FC<ButtonAuthTestDashProps> = ({ fnCallback }) => {
	const handlerOnClickButton = () => fnCallback()

	return (
		<button className={style.button} type="button" onClick={handlerOnClickButton}>
			<svg
				className={style.icon}
				width="24"
				height="26"
				viewBox="0 0 24 26"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M4 0a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h7a13 13 0 0 0 0-26H4Zm2.78 11.44a1.56 1.56 0 1 0 0 3.12h10.44a1.56 1.56 0 1 0 0-3.12H6.78Z"
					fill="#282828"
				/>
			</svg>

			<span className={style.title}>Test Dash</span>
		</button>
	)
}
