import { ReactElement } from 'react'
import { NextPage } from 'next'

export type NextPageWithLayout = NextPage & {
	getLayout?: (component: ReactElement) => ReactElement | undefined
}