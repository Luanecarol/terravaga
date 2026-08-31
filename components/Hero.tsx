export default function Hero() {
  return (
    <section className="bg-amber-50 py-12 px-6 text-center">
      <p className="text-amber-600 text-sm mb-3">
        Exclusivo para terraplanagem
      </p>
      <h1 className="text-2xl md:text-4xl font-medium text-gray-900 mb-4 leading-snug">
        Encontre sua próxima vaga no setor de{" "}
        <span className="text-amber-600">movimento de terra</span>
      </h1>
      <p className="text-gray-500 text-sm md:text-base mb-8 max-w-md mx-auto">
        A primeira plataforma de vagas dedicada ao setor de terraplanagem,
        pavimentação e infraestrutura.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button className="bg-amber-600 text-white px-6 py-3 rounded-lg text-sm hover:bg-amber-700 transition-colors">
          Ver vagas abertas
        </button>
        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm hover:bg-gray-50 transition-colors">
          Sou empresa — contratar
        </button>
      </div>
    </section>
  );
}