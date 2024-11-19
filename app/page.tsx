export default function Home() {
  return (
    <div>
      <header className="flex flex-col md:flex-row items-center justify-between px-0 lg:px-14 py-6 mb-20">
        <div className="flex items-center gap-2">
          <span className="text-3xl md:mb-0 mb-6 font-bold text-gray-800">Spot Reserve</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span className="text-gray-600 text-lg font-medium">Anuncie aqui seu espaço</span>
          <button className="bg-blue-500 text-white text-lg px-4 py-2 rounded-full hover:bg-blue-600 transition w-full sm:w-auto">
            Entrar
          </button>
        </div>
      </header>
      <main>
        <div className="flex items-center justify-center">
          <form className="flex items-center gap-2 p-4 rounded-full shadow-lg border border-gray-300">
            <div className="flex flex-col">
              <label htmlFor="onde" className="text-xs text-gray-600 font-medium hidden">
                Onde
              </label>
              <input
                type="text"
                id="onde"
                placeholder="Onde"
                className="w-32 lg:w-48 px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="data" className="text-xs text-gray-600 font-medium hidden">
                Data
              </label>
              <input
                type="date"
                id="data"
                className="w-32 lg:w-48 px-4 py-2 text-sm border border-gray-300 rounded-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="quantidade" className="text-xs text-gray-600 font-medium hidden">
                Quantidade de Pessoas
              </label>
              <input
                type="number"
                id="quantidade"
                placeholder="Qtd Pessoas"
                min="1"
                className="w-38 px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-blue-600 transition"
            >
              Buscar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
