'use client'

import { FC, useState } from 'react'
import { Checkbox } from '@/shared/ui/checkbox/checkbox'
import { ButtonAuthGoogle } from '@/shared/ui/button-auth-google/button-auth-google'
import { ButtonAuthTestDash } from '@/shared/ui/button-auth-test-dash/button-auth-test-dash'
import style from './authentication-step.module.css'

// TODO: "2" create adapt for this component

export const AuthenticationStep: FC = () => {
	const [isAgree, setIsAgree] = useState(false)

	const toggleIsAgree = () => setIsAgree(prevState => !prevState)

	const serviceAuthGoogle = () => console.log('Auth with Google')
	const serviceAuthDash = () => console.log('Auth with Dash')

	return (
		<div className={style.wrapper}>
			<div className={style.info}>
				<svg
					className={style.info_icon}
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
						fill="currentColor"
					/>
				</svg>
				<div className={style.info_text}>
					<h2 className={style.info_title}>Dash</h2>
					<p className={style.info_description}>Keep of your expenses</p>
				</div>
			</div>
			<div className={style.content}>
				<h2 className={style.title}>Authentication</h2>
				<div className={style.process}>
					<p className={style.subtitle}>Select process authentication:</p>
					<ButtonAuthGoogle fnCallback={serviceAuthGoogle} />
				</div>
				<div className={style.alternative_process}>
					<p className={style.subtitle}>Alternative process authentication:</p>
					<p className={style.description}>
						Select this method only if you want to tap into the project’s functionality. But if you
						want to create a personal account, select the above method.
					</p>
					<ButtonAuthTestDash fnCallback={serviceAuthDash} />
				</div>
				<div className={style.agree}>
					<Checkbox fnCallback={toggleIsAgree} isChecked={isAgree} name="agree">
						<p className={style.agree_title}>Agree to the privacy policy</p>
					</Checkbox>
				</div>
			</div>
		</div>
	)
}
