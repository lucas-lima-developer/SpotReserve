import Header from "@/components/Header/Header";
import HomeFilter from "@/components/Home/FilterHome";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex items-center justify-center">
          <HomeFilter />
        </div>
        
        <div className="flex items-center justify-center">
          <form className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6 p-6 rounded-2xl mb-10">
            <div className="flex flex-col flex-1 min-w-[180px]">
              <label
                htmlFor="onde"
                className="text-xs text-gray-600 font-medium hidden"
              >
                Onde
              </label>
              <input
                type="text"
                id="onde"
                placeholder="Onde"
                className="w-full px-6 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col flex-1 min-w-[180px]">
              <label
                htmlFor="data"
                className="text-xs text-gray-600 font-medium hidden"
              >
                Data
              </label>
              <input
                type="date"
                id="data"
                className="w-full px-6 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col flex-1 min-w-[180px]">
              <label
                htmlFor="quantidade"
                className="text-xs text-gray-600 font-medium hidden"
              >
                Quantidade de Pessoas
              </label>
              <input
                type="number"
                id="quantidade"
                placeholder="Qtd Pessoas"
                min="1"
                className="w-full px-6 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-blue-600 transition flex-shrink-0 w-full lg:w-auto"
            >
              Buscar
            </button>
          </form>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-12">
          {/* Card example */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src="data:image/jpeg;base64,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"
                alt="Espaço"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-800">
                    Espaço Moderno
                  </h3>
                  <span className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Nota: 4.5
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Endereço: Rua Exemplo, 123
                </p>
                <p className="text-sm text-gray-600">Tamanho: 100m²</p>
                <p className="text-sm text-gray-600">Preço: R$ 500,00</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Logo ou Nome */}
          <div className="text-lg font-bold">Spot Reserve</div>
          {/* Links de Navegação */}
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Sobre
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Política de Privacidade
            </a>
          </div>
          {/* Redes Sociais */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
