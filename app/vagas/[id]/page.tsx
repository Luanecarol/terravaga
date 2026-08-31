import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabase";

export default async function DetalheVaga({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const idNumerico = parseInt(id, 10);

  if (isNaN(idNumerico)) {
    return (
      <main>
        <Navbar />
        <p className="text-center mt-20 text-gray-400">Vaga não encontrada.</p>
      </main>
    );
  }

  const { data: vaga } = await supabase
    .from("vagas")
    .select("*")
    .eq("id", idNumerico)
    .single();

  if (!vaga) {
    return (
      <main>
        <Navbar />
        <p className="text-center mt-20 text-gray-400">Vaga não encontrada.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl p-8 border border-gray-100">
          <div className="flex gap-4 items-start mb-6">
            <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 font-bold text-lg shrink-0">
              {vaga.empresa.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">{vaga.titulo}</h1>
              <p className="text-sm text-gray-400 mt-1">{vaga.empresa} · {vaga.local}</p>
              <div className="flex gap-2 mt-3">
                <span className="text-xs bg-amber-50 text-amber-700 border border-amber-100 px-3 py-1 rounded-full font-medium">
                  {vaga.tipo}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-amber-50 border border-amber-100 rounded-xl px-6 py-4 mb-8">
            <div>
              <p className="text-base font-semibold text-amber-700">{vaga.salario}</p>
              <p className="text-xs text-amber-500 mt-0.5">Salário mensal</p>
            </div>
            <button className="bg-amber-600 text-white text-sm font-medium px-6 py-2.5 rounded-xl hover:bg-amber-700 transition-colors">
              Candidatar-se
            </button>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-3">Sobre a vaga</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              {vaga.descricao || "Descrição não informada."}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}