"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function VagaForm() {
  const [titulo, setTitulo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [salario, setSalario] = useState("");
  const [local, setLocal] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCarregando(true);
    setErro("");

    const { error } = await supabase.from("vagas").insert({
      titulo,
      empresa,
      salario,
      local,
      tipo,
      descricao,
    });

    if (error) {
      setErro("Erro ao publicar vaga. Tente novamente.");
      setCarregando(false);
      return;
    }

    setSucesso(true);
    setCarregando(false);
    router.refresh();
  }

  if (sucesso) {
    return (
      <div className="text-center py-8">
        <p className="text-sm font-medium text-gray-800">Vaga publicada com sucesso!</p>
        <button
          onClick={() => setSucesso(false)}
          className="mt-4 text-sm text-amber-600 hover:underline"
        >
          Publicar outra vaga
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-gray-500 block mb-1.5">Título da vaga</label>
          <input
            type="text"
            placeholder="Ex: Operador de Motoniveladora"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400"
            required
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 block mb-1.5">Empresa</label>
          <input
            type="text"
            placeholder="Nome da empresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-gray-500 block mb-1.5">Salário</label>
          <input
            type="text"
            placeholder="Ex: R$ 5.000 - R$ 7.000"
            value={salario}
            onChange={(e) => setSalario(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400"
            required
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 block mb-1.5">Local</label>
          <input
            type="text"
            placeholder="Ex: Goiânia, GO"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400"
            required
          />
        </div>
      </div>

      <div>
        <label className="text-xs text-gray-500 block mb-1.5">Tipo de contrato</label>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 bg-white"
          required
        >
          <option value="">Selecione...</option>
          <option value="CLT">CLT</option>
          <option value="PJ">PJ</option>
          <option value="Temporário">Temporário</option>
        </select>
      </div>

      <div>
        <label className="text-xs text-gray-500 block mb-1.5">Descrição da vaga</label>
        <textarea
          rows={4}
          placeholder="Descreva as responsabilidades, requisitos e benefícios..."
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 resize-none"
          required
        />
      </div>

      {erro && <p className="text-xs text-red-500">{erro}</p>}

      <button
        type="submit"
        disabled={carregando}
        className="bg-amber-600 text-white text-sm font-medium py-2.5 rounded-xl hover:bg-amber-700 transition-colors disabled:opacity-60"
      >
        {carregando ? "Publicando..." : "Publicar vaga"}
      </button>
    </form>
  );
}