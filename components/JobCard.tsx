import Link from "next/link";

type Vaga = {
  id: number;
  titulo: string;
  empresa: string;
  salario: string;
  local: string;
  tipo: string;
  descricao: string;
};

export default function JobCard({ vaga }: { vaga: Vaga }) {
  return (
    <Link href={`/vagas/${vaga.id}`}>
      <div className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-amber-200 hover:shadow-sm transition-all cursor-pointer">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 font-semibold text-sm shrink-0">
              {vaga.empresa.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                {vaga.titulo}
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">{vaga.empresa}</p>
            </div>
          </div>
          <span className="text-sm font-semibold text-amber-600 shrink-0">
            {vaga.salario}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <span className="text-xs bg-amber-50 text-amber-700 border border-amber-100 px-3 py-1 rounded-full font-medium">
              {vaga.tipo}
            </span>
            <span className="text-xs bg-gray-50 text-gray-500 border border-gray-100 px-3 py-1 rounded-full">
              {vaga.local}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}