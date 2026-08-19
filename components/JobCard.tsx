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
    <div className="border border-gray-200 rounded-xl p-4 bg-white hover:border-amber-300 transition-colors">
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 font-medium text-sm">
            {vaga.empresa.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">{vaga.titulo}</h3>
            <p className="text-xs text-gray-500">{vaga.empresa}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mb-3">
        <span className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
          {vaga.tipo}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">{vaga.local}</span>
        <span className="text-sm font-medium text-amber-600">{vaga.salario}</span>
      </div>
    </div>
  );
}