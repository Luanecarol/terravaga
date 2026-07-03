export default function Hero() {
  return (
    <section className="bg-amber-50 py-16 px-6 text-center">
      <p className="text-amber-600 text-sm mb-3">
        Exclusivo para terraplanagem
      </p>
      <h1 className="text-3xl font-medium text-gray-900 mb-4">
        Encontre sua próxima vaga no setor de{" "}
        <span className="text-amber-600">movimento de terra</span>
      </h1>
      <p className="text-gray-500 text-base mb-8 max-w-md mx-auto">
        A primeira plataforma de vagas dedicada ao setor de terraplanagem,
        pavimentação e infraestrutura.
      </p>
      <div className="flex gap-3 justify-center">
        <button className="bg-amber-600 text-white px-6 py-3 rounded-lg text-sm">
          Ver vagas abertas
        </button>
        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm">
          Sou empresa — contratar
        </button>
      </div>
    </section>
  );
}