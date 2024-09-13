import { FC, ReactNode, useId } from 'react'
import style from './checkbox.module.css'

interface CheckboxProps {
	fnCallback: () => void
	isChecked: boolean
	name: string
	children: ReactNode
}

export const Checkbox: FC<CheckboxProps> = ({ isChecked, name, fnCallback, children }) => {
	const id = useId()

	return (
		<div className={style.wrapper}>
			<input
				className={style.checkbox}
				type="checkbox"
				id={id}
				name={name}
				checked={isChecked}
				onChange={() => fnCallback()}
			/>
			<label className={style.label} htmlFor={id}>
				{children}
			</label>
		</div>
	)
}
