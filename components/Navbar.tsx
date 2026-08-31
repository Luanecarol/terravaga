export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b border-gray-100 bg-white">
      <span className="flex items-center gap-2 text-base font-medium text-gray-900">
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
        TerraVaga
      </span>

      <div className="hidden md:flex gap-6 text-sm text-gray-500">
        <span className="hover:text-gray-900 cursor-pointer">Vagas</span>
        <span className="hover:text-gray-900 cursor-pointer">Empresas</span>
        <span className="hover:text-gray-900 cursor-pointer">Profissionais</span>
      </div>

      <button className="bg-amber-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
        Publicar vaga
      </button>
    </nav>
  );
}