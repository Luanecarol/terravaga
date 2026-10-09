import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-amber-50 py-16 px-6 text-center">
      <span className="inline-block text-xs font-medium text-amber-700 bg-amber-100 px-3 py-1 rounded-full mb-5">
        Exclusivo para terraplanagem
      </span>
      <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4 leading-snug max-w-2xl mx-auto">
        Encontre sua próxima vaga no setor de{" "}
        <span className="text-amber-600">movimento de terra</span>
      </h1>
      <p className="text-gray-500 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
        A primeira plataforma de vagas dedicada ao setor de terraplanagem,
        pavimentação e infraestrutura.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/vagas"
          className="bg-amber-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-amber-700 transition-colors"
        >
          Ver vagas abertas
        </Link>
        <Link
          href="/para-empresas"
          className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl text-sm hover:bg-gray-50 transition-colors"
        >
          Sou empresa — contratar
        </Link>
      </div>
    </section>
  );
}