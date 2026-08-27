import Navbar from "@/components/Navbar";
import JobCard from "@/components/JobCard";
import { supabase } from "@/lib/supabase";

export default async function Vagas() {
  const { data: vagas } = await supabase.from("vagas").select("*");

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10 flex gap-8">
        <aside className="w-56 shrink-0">
          <div className="bg-white rounded-2xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Tipo de vaga
            </p>
            <div className="flex flex-col gap-1 mb-6">
              {["Todas", "CLT", "PJ", "Temporário"].map((tipo) => (
                <button
                  key={tipo}
                  className="text-left text-sm text-gray-600 px-3 py-2 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors"
                >
                  {tipo}
                </button>
              ))}
            </div>

            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Região
            </p>
            <div className="flex flex-col gap-1">
              {["São Paulo", "Minas Gerais", "Goiás", "Paraná", "Bahia"].map((estado) => (
                <button
                  key={estado}
                  className="text-left text-sm text-gray-600 px-3 py-2 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors"
                >
                  {estado}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-5">
            <p className="text-sm text-gray-500">
              <span className="font-medium text-gray-800">{vagas?.length}</span> vagas encontradas
            </p>
            <select className="text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 bg-white">
              <option>Mais recentes</option>
              <option>Maior salário</option>
            </select>
          </div>

          <div className="flex flex-col gap-3">
            {vagas?.map((vaga) => (
              <JobCard key={vaga.id} vaga={vaga} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}