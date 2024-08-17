import type { FC } from 'react'
import { default as ImageNext } from 'next/image'
import { ImageProps } from 'next/image'

const Image: FC<ImageProps> = ({ quality, ...props }) => (
	<ImageNext {...props} quality={quality ?? 100} />
)

export default Image
