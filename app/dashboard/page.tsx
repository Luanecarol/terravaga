import Navbar from "@/components/Navbar";
import VagaForm from "@/components/VagaForm";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">

        <div className="mb-8">
          <h1 className="text-xl font-semibold text-gray-900">Olá, empresa 👋</h1>
          <p className="text-sm text-gray-400 mt-1">Gerencie suas vagas publicadas</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { numero: "0", label: "Vagas ativas" },
            { numero: "0", label: "Candidatos" },
            { numero: "0", label: "Visualizações" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="text-2xl font-semibold text-amber-600">{item.numero}</div>
              <div className="text-xs text-gray-400 mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h2 className="text-base font-semibold text-gray-900 mb-6">Publicar nova vaga</h2>
          <VagaForm />
        </div>

      </div>
    </main>
  );
}