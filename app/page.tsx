import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: vagas } = await supabase.from("vagas").select("*");

  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <section className="p-6">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Vagas recentes</h2>
        <div className="flex flex-col gap-4">
          {vagas?.map((vaga) => (
            <div key={vaga.id} className="border border-gray-200 rounded-xl p-4 bg-white">
              <h3 className="text-base font-medium text-gray-900">{vaga.titulo}</h3>
              <p className="text-sm text-gray-500">{vaga.empresa} · {vaga.local}</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full">{vaga.tipo}</span>
                <span className="text-xs text-amber-600 font-medium">{vaga.salario}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}