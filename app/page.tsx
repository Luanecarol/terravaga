import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import JobCard from "@/components/JobCard";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: vagas } = await supabase.from("vagas").select("*").limit(4);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />

      <section className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Vagas recentes</h2>
          <Link href="/vagas" className="text-sm text-amber-600 hover:underline">
            Ver todas →
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          {vagas?.map((vaga) => (
            <JobCard key={vaga.id} vaga={vaga} />
          ))}
        </div>
      </section>

      <section className="bg-amber-600 py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold text-white mb-3">
          Sua empresa precisa de profissionais?
        </h2>
        <p className="text-amber-100 text-sm mb-8 max-w-md mx-auto">
          Publique suas vagas e alcance operadores, topógrafos e engenheiros
          especializados no setor de terraplanagem.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/auth/cadastro"
            className="bg-white text-amber-700 font-medium px-6 py-3 rounded-xl text-sm hover:bg-amber-50 transition-colors"
          >
            Publicar vaga grátis
          </Link>
          <Link
            href="/para-empresas"
            className="border border-amber-400 text-white px-6 py-3 rounded-xl text-sm hover:bg-amber-700 transition-colors"
          >
            Saiba mais
          </Link>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-8 px-6 text-center">
        <p className="text-xs text-gray-400">
          © 2026 TerraVaga — Plataforma de vagas para terraplanagem
        </p>
      </footer>
    </main>
  );
}