'use client'

import { FC, useEffect, useState } from 'react'
import { LogoDash } from '@/shared/ui/logo-dash/logo-dash'
import style from './authentication-header.module.css'
import clsx from 'clsx'

interface AuthenticationHeaderProps {
	currentStep: number
	maxStep: number
}

const generateStepsArray = (currentStep: number, maxStep: number): number[] => {
	return Array.from({ length: maxStep }, (__, index) => (index < currentStep ? 1 : 0))
}

export const AuthenticationHeader: FC<AuthenticationHeaderProps> = ({ currentStep, maxStep }) => {
	const [steps, setSteps] = useState<number[]>(generateStepsArray(currentStep, maxStep))

	useEffect(() => setSteps(generateStepsArray(currentStep, maxStep)), [currentStep, maxStep])

	return (
		<div className={style.header}>
			<LogoDash size="xl" />
			<div className={style.steps}>
				{steps.map((item, index) =>
					item === 1 ? (
						<span className={clsx(style.step, style.completed_step)} key={index}></span>
					) : (
						<span className={clsx(style.step, style.upcoming_step)} key={index}></span>
					)
				)}
			</div>
		</div>
	)
}
