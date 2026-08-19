import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import JobCard from "@/components/JobCard";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: vagas } = await supabase.from("vagas").select("*");

  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
       <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Vagas recentes</h2>
        <div className="flex flex-col gap-3">
          {vagas?.map((vaga) => (
            <JobCard key={vaga.id} vaga={vaga} />
          ))}
        </div>
      </section>
    </main>
  );
}