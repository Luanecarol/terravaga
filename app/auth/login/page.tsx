import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-8 border border-gray-100 w-full max-w-sm">
        <div className="text-center mb-6">
          <span className="flex items-center justify-center gap-2 text-base font-medium text-gray-900 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
            TerraVaga
          </span>
          <h1 className="text-xl font-semibold text-gray-900 mt-3">Entrar na conta</h1>
          <p className="text-sm text-gray-400 mt-1">Acesse vagas exclusivas do setor</p>
        </div>

        <LoginForm />

        <p className="text-center text-xs text-gray-400 mt-5">
          Não tem conta?{" "}
          <a href="/auth/cadastro" className="text-amber-600 hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </main>
  );
}