"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function CadastroForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("profissional");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const router = useRouter();

  async function handleCadastro(e: React.FormEvent) {
    e.preventDefault();
    setCarregando(true);
    setErro("");

    const { error } = await supabase.auth.signUp({
      email,
      password: senha,
      options: {
        data: { tipo }
      }
    });

    if (error) {
      setErro("Erro ao criar conta. Tente novamente.");
      setCarregando(false);
      return;
    }

    setSucesso(true);
    setCarregando(false);
  }

  if (sucesso) {
    return (
      <div className="text-center py-4">
        <p className="text-sm text-gray-700 font-medium">Conta criada!</p>
        <p className="text-xs text-gray-400 mt-1">
          Verifique seu email para confirmar o cadastro.
        </p>
        <button
          onClick={() => router.push("/auth/login")}
          className="mt-4 text-sm text-amber-600 hover:underline"
        >
          Ir para o login
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleCadastro} className="flex flex-col gap-4">
      <div>
        <label className="text-xs text-gray-500 block mb-1.5">Você é...</label>
        <div className="flex gap-2">
          {["profissional", "empresa"].map((op) => (
            <button
              key={op}
              type="button"
              onClick={() => setTipo(op)}
              className={`flex-1 py-2 text-sm rounded-xl border transition-colors capitalize ${
                tipo === op
                  ? "border-amber-400 bg-amber-50 text-amber-700 font-medium"
                  : "border-gray-200 text-gray-500"
              }`}
            >
              {op === "profissional" ? "Profissional" : "Empresa"}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-xs text-gray-500 block mb-1.5">E-mail</label>
        <input
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400"
          required
        />
      </div>

      <div>
        <label className="text-xs text-gray-500 block mb-1.5">Senha</label>
        <input
          type="password"
          placeholder="••••••••"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400"
          required
        />
      </div>

      {erro && <p className="text-xs text-red-500">{erro}</p>}

      <button
        type="submit"
        disabled={carregando}
        className="bg-amber-600 text-white text-sm font-medium py-2.5 rounded-xl hover:bg-amber-700 transition-colors mt-1 disabled:opacity-60"
      >
        {carregando ? "Criando conta..." : "Criar conta"}
      </button>
    </form>
  );
}