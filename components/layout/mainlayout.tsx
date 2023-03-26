import { Navbar } from "./navbar"

export default function MainLayout(page: any) {
	return (
		<div>
			<Navbar />
            <main>{page}</main>
		</div>
	)
}