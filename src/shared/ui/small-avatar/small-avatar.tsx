import type { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx'
import style from './small-avatar.module.css'

interface SmallAvatarProps {
	className?: string
	avatarUrl: StaticImageData
}

export const SmallAvatar: FC<SmallAvatarProps> = ({ avatarUrl, className }) => {
	return (
		<div className={clsx(style.circle, className)}>
			<Image className={style.avatar} src={avatarUrl} alt="user-avatar" />
		</div>
	)
}
