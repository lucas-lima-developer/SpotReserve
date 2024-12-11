import { Button } from "../ui/button";

export default function Header() {
	return (
		<header className="flex flex-col md:flex-row items-center justify-between px-5 py-6 mb-20">
			<div className="flex items-center gap-2">
				<span className="text-3xl md:mb-0 mb-6 font-bold text-gray-800">Spot Reserve</span>
			</div>
			<div className="flex flex-col sm:flex-row items-center gap-4">
			  <Button className="text-lg" variant={'link'}>Anuncie aqui seu espaço</Button>
				<Button className="w-full sm:w-auto">Entrar</Button>
			</div>
		</header>
	)
}