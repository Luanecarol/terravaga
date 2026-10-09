import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b border-gray-100 bg-white">
      <Link href="/" className="flex items-center gap-2 text-base font-medium text-gray-900">
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
        TerraVaga
      </Link>

      <div className="hidden md:flex gap-6 text-sm text-gray-500">
        <Link href="/vagas" className="hover:text-gray-900 transition-colors">Vagas</Link>
        <Link href="/para-empresas" className="hover:text-gray-900 transition-colors">Para empresas</Link>
      </div>

      <div className="flex gap-2">
        <Link
          href="/auth/login"
          className="text-sm px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          Entrar
        </Link>
        <Link
          href="/auth/cadastro"
          className="text-sm px-4 py-2 rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition-colors"
        >
          Publicar vaga
        </Link>
      </div>
    </nav>
  );
}