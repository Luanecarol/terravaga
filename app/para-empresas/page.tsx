import Link from "next/link";

export default function ParaEmpresas() {
  const steps = [
    {
      number: "01",
      title: "Cadastre sua empresa.",
      description:
        "Crie o perfil da sua empresa e apresente quem está por trás da próxima grande obra.",
      detail: "Seu ponto de partida",
      items: ["Dados da empresa", "Cidade e região de atuação", "Perfil pronto para contratar"],
    },
    {
      number: "02",
      title: "Publique sua oportunidade.",
      description:
        "Conte qual profissional você procura, os requisitos e onde o trabalho vai acontecer.",
      detail: "A vaga certa, bem explicada",
      items: ["Cargo e tipo de máquina", "Experiência e requisitos", "Local, salário e benefícios"],
    },
    {
      number: "03",
      title: "Encontre sua próxima contratação.",
      description:
        "Receba candidaturas, conheça os profissionais e converse com quem faz sentido para sua equipe.",
      detail: "Da candidatura à equipe",
      items: ["Candidaturas organizadas", "Perfis para analisar", "Contato com os candidatos"],
    },
  ];

  const benefits = [
    {
      number: "01",
      title: "O seu setor é o nosso foco.",
      description:
        "Terraplanagem, movimento de terra e construção. Sua oportunidade em um espaço feito para esse mercado.",
      tag: "Especialização",
    },
    {
      number: "02",
      title: "Menos trabalho para anunciar.",
      description:
        "Um cadastro simples e uma publicação objetiva, com as informações que o profissional precisa conhecer.",
      tag: "Praticidade",
    },
    {
      number: "03",
      title: "Cada candidatura no seu lugar.",
      description:
        "Organize o recrutamento e consulte os interessados sem depender de mensagens espalhadas.",
      tag: "Organização",
    },
    {
      number: "04",
      title: "Da sua região para a sua obra.",
      description:
        "Informe a localização da vaga e facilite o encontro com profissionais interessados em trabalhar ali.",
      tag: "Conexão local",
    },
  ];

  const testimonials = [
    {
      quote:
        "Ter um espaço voltado para o nosso setor facilita muito na hora de explicar o perfil de profissional que procuramos.",
      name: "Mariana Costa",
      role: "RH · Horizonte Terraplanagem",
      initials: "MC",
    },
    {
      quote:
        "O que mais gostei foi da simplicidade. A proposta de reunir as candidaturas em um só lugar faz sentido para nossa rotina.",
      name: "Ricardo Almeida",
      role: "Gestor · Base Forte Obras",
      initials: "RA",
    },
    {
      quote:
        "Precisamos de gente que conheça o trabalho em campo. Uma plataforma dedicada a esse mercado é uma ótima ideia.",
      name: "Paula Santos",
      role: "Diretora · Solo Engenharia",
      initials: "PS",
    },
  ];

  const buttonClass =
    "inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600";

  return (
    <div className="min-h-screen bg-[#FFFCF7] font-sans text-stone-900 antialiased selection:bg-amber-200">
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-lg bg-white p-4 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>

      <header className="border-b border-stone-200/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link
            href="/"
            aria-label="TerraVaga — início"
            className="flex items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-600 text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path
                  d="M4 7h16M12 7v12M5 19h14"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="m16 11 4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-xl font-extrabold tracking-tight">
              Terra<span className="text-amber-600">Vaga</span>
            </span>
          </Link>

          <nav aria-label="Menu principal" className="flex items-center gap-7">
            <Link
              href="#como-funciona"
              className="hidden text-sm font-medium text-stone-600 transition-colors hover:text-amber-700 md:block"
            >
              Como funciona
            </Link>
            <Link
              href="#beneficios"
              className="hidden text-sm font-medium text-stone-600 transition-colors hover:text-amber-700 md:block"
            >
              Benefícios
            </Link>
            <Link
              href="#planos"
              className="hidden text-sm font-medium text-stone-600 transition-colors hover:text-amber-700 md:block"
            >
              Planos
            </Link>
            <Link
              href="/cadastro/empresa"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-stone-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-amber-700 sm:px-5 sm:text-sm"
            >
              Publicar vaga grátis
            </Link>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-20 h-[34rem] w-[34rem] rounded-full bg-amber-100/60 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-semibold text-amber-800">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                Feito para quem movimenta a terra
              </span>

              <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Sua próxima grande obra começa com{" "}
                <span className="text-amber-600">a equipe certa.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-8 text-stone-600 sm:text-lg">
                Conecte sua empresa a profissionais de terraplanagem e movimento
                de terra. Publique sua vaga e encontre quem faz a obra acontecer.
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link href="/cadastro/empresa" className={buttonClass}>
                  Publicar vaga grátis
                  <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  href="#como-funciona"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full px-2 text-sm font-semibold text-stone-700 hover:text-amber-700"
                >
                  Conheça o TerraVaga
                  <span aria-hidden="true">↓</span>
                </Link>
              </div>

              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-stone-500">
                {["Cadastro gratuito", "Foco no seu setor", "Sem complicação"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <span aria-hidden="true" className="text-amber-600">
                        ✓
                      </span>
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="rounded-[2.5rem] bg-[#F3E8D6] p-5 sm:p-8">
                <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl shadow-stone-900/5">
                  <div className="flex items-center justify-between border-b border-stone-100 px-5 py-4">
                    <span className="text-sm font-bold">
                      Terra<span className="text-amber-600">Vaga</span>
                    </span>
                    <span className="rounded-full bg-stone-100 px-2.5 py-1 text-[10px] font-medium text-stone-500">
                      Demonstração
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <p className="text-xs text-stone-500">Seu painel de contratação</p>
                    <h2 className="mt-1 text-xl font-semibold tracking-tight">
                      Vamos montar sua equipe?
                    </h2>

                    <div className="mt-5 rounded-2xl bg-amber-50 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700">
                            Exemplo de vaga
                          </span>
                          <h3 className="mt-2 text-sm font-semibold">
                            Operador de escavadeira
                          </h3>
                          <p className="mt-1 text-xs text-stone-500">
                            São Paulo, SP · Presencial
                          </p>
                        </div>
                        <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-amber-700">
                          Publicada
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {["CLT", "Experiência em campo", "Escavadeira hidráulica"].map(
                          (tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-amber-200/70 px-2 py-1 text-[10px] text-amber-900"
                            >
                              {tag}
                            </span>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="mb-3 mt-6 flex items-center justify-between">
                      <h3 className="text-xs font-semibold">Candidatos à vaga</h3>
                      <span className="text-[10px] text-stone-400">
                        Perfis ilustrativos
                      </span>
                    </div>

                    {[
                      { initials: "JS", name: "João Silva", role: "Operador de escavadeira", experience: "8 anos" },
                      { initials: "CM", name: "Carlos Martins", role: "Operador de máquinas", experience: "5 anos" },
                      { initials: "AF", name: "André Ferreira", role: "Operador de escavadeira", experience: "6 anos" },
                    ].map((candidate) => (
                      <div
                        key={candidate.initials}
                        className="flex items-center gap-3 border-t border-stone-100 py-3"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-100 text-[10px] font-bold text-stone-600">
                          {candidate.initials}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-semibold">
                            {candidate.name}
                          </p>
                          <p className="mt-0.5 truncate text-[10px] text-stone-500">
                            {candidate.role}
                          </p>
                        </div>
                        <span className="text-[10px] text-stone-500">
                          {candidate.experience}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 right-3 flex items-center gap-3 rounded-2xl border border-stone-100 bg-white p-4 shadow-lg shadow-stone-900/5 sm:-right-3">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-700"
                >
                  ✓
                </span>
                <div>
                  <p className="text-xs font-semibold">Gente boa de obra.</p>
                  <p className="mt-1 text-[11px] text-stone-500">
                    No lugar certo para se conectar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-label="Áreas de atuação"
          className="border-y border-stone-200/60 bg-white/60"
        >
          <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
            <p className="text-center text-xs font-medium text-stone-500">
              Um ponto de encontro para quem constrói, opera e transforma.
            </p>
            <ul className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-stone-700">
              {[
                "Terraplanagem",
                "Movimento de terra",
                "Máquinas pesadas",
                "Construção",
                "Infraestrutura",
              ].map((sector) => (
                <li key={sector}>{sector}</li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="como-funciona"
          className="mx-auto max-w-6xl scroll-mt-8 px-5 py-20 sm:px-8 sm:py-24"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Como funciona
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Da vaga aberta à próxima contratação.
              <br className="hidden sm:block" /> Em três passos.
            </h2>
            <p className="mt-5 leading-7 text-stone-600">
              Você conhece a necessidade da sua obra. O TerraVaga ajuda a colocar
              sua oportunidade no caminho dos profissionais.
            </p>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.number}
                className="rounded-3xl border border-stone-200/80 bg-white p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-sm font-semibold text-amber-700">
                  {step.number}
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {step.description}
                </p>
                <div className="mt-7 rounded-2xl bg-stone-50 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-stone-400">
                    {step.detail}
                  </p>
                  <ul className="mt-3 space-y-3">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs text-stone-600"
                      >
                        <span aria-hidden="true" className="text-amber-600">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="beneficios"
          className="scroll-mt-8 bg-[#F5F0E7] px-5 py-20 sm:px-8 sm:py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Por que TerraVaga
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Feito para a vida real
                <br className="hidden sm:block" /> de quem tem obra para tocar.
              </h2>
              <p className="mt-5 max-w-md leading-8 text-stone-600">
                Entre prazos, máquinas e equipes, contratar precisa ser mais
                simples. Cada detalhe começa por entender o seu mercado.
              </p>
              <Link
                href="/cadastro/empresa"
                className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-lg text-sm font-semibold text-amber-800 hover:text-amber-600"
              >
                Encontrar minha próxima contratação
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit.number}
                  className="rounded-3xl border border-white bg-white/80 p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-700">
                      {benefit.number}
                    </span>
                    <span className="rounded-full bg-stone-100 px-2.5 py-1 text-[10px] font-medium text-stone-500">
                      {benefit.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-snug tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Quem está no campo entende
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Boas equipes fazem a diferença.
            </h2>
            <p className="mt-5 leading-7 text-stone-600">
              Uma experiência pensada para empresas que precisam de gente
              preparada para colocar a mão na obra.
            </p>
            <p className="mt-3 text-xs text-stone-400">
              Depoimentos ilustrativos. Nomes, empresas e relatos fictícios.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex flex-col rounded-3xl border border-stone-200 bg-white p-7"
              >
                <span
                  aria-hidden="true"
                  className="text-5xl leading-none text-amber-600"
                >
                  “
                </span>
                <blockquote className="mt-3 flex-1 text-sm leading-8 text-stone-600">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-stone-100 pt-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-xs font-semibold text-amber-800">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="mt-1 text-[11px] text-stone-500">
                      {testimonial.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          id="planos"
          className="scroll-mt-8 border-y border-stone-200/60 bg-white px-5 py-20 sm:px-8 sm:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto max-w-xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Planos para sua empresa
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Comece pequeno.
                <br />
                Contrate para crescer.
              </h2>
              <p className="mt-5 leading-7 text-stone-600">
                Publique gratuitamente ou conheça uma opção para dar mais
                visibilidade às suas oportunidades.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <article className="flex flex-col rounded-3xl border border-stone-200 bg-[#FFFCF7] p-7 sm:p-9">
                <span className="text-sm font-semibold text-stone-500">
                  Gratuito
                </span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  O primeiro passo.
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  Para começar a divulgar suas vagas no setor.
                </p>

                <p className="mt-7 text-4xl font-semibold tracking-tight">
                  R$ 0
                  <span className="ml-2 text-sm font-normal tracking-normal text-stone-500">
                    para começar
                  </span>
                </p>

                <ul className="my-8 flex-1 space-y-4 text-sm text-stone-600">
                  {[
                    "Perfil da sua empresa",
                    "Publicação de vaga",
                    "Recebimento de candidaturas",
                    "Acesso aos perfis dos interessados",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span aria-hidden="true" className="text-amber-600">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/cadastro/empresa"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold transition-colors hover:border-amber-600 hover:bg-amber-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"
                >
                  Publicar vaga grátis
                </Link>
              </article>

              <article className="relative flex flex-col rounded-3xl border-2 border-amber-600 bg-amber-50/60 p-7 sm:p-9">
                <span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-amber-600 px-3 py-1 text-[10px] font-semibold text-white">
                  Mais visibilidade
                </span>
                <span className="text-sm font-semibold text-amber-700">
                  Premium
                </span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Mais espaço para crescer.
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  Para empresas com uma rotina maior de contratações.
                </p>

                <p className="mt-7 text-3xl font-semibold tracking-tight">
                  Sob consulta
                </p>
                <p className="mt-2 text-xs text-stone-500">
                  Consulte valores e disponibilidade dos recursos.
                </p>

                <ul className="my-8 flex-1 space-y-4 text-sm text-stone-600">
                  {[
                    "Todos os recursos do Gratuito",
                    "Opções de destaque para suas vagas",
                    "Mais oportunidades de divulgação",
                    "Atendimento para sua empresa",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span aria-hidden="true" className="text-amber-600">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/contato?assunto=premium" className={buttonClass}>
                  Conhecer o Premium
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-24">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-stone-900 px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-amber-500/20"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-48 -left-20 h-96 w-96 rounded-full border border-amber-500/20"
            />
            <div className="relative mx-auto max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                A próxima etapa começa aqui
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                Sua obra tem um próximo passo.
                <span className="text-amber-400"> Sua equipe também.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-stone-300">
                Apresente sua empresa, publique sua oportunidade e conecte-se a
                quem está pronto para construir com você.
              </p>
              <Link
                href="/cadastro/empresa"
                className={`${buttonClass} mt-8`}
              >
                Comece agora gratuitamente
                <span aria-hidden="true">↗</span>
              </Link>
              <p className="mt-4 text-xs text-stone-400">
                Seu próximo profissional pode estar procurando essa oportunidade.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="text-lg font-extrabold tracking-tight">
              Terra<span className="text-amber-600">Vaga</span>
            </Link>
            <p className="mt-2 text-xs text-stone-500">
              Conectando quem movimenta a terra.
            </p>
          </div>
          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-stone-500"
          >
            <Link href="/vagas" className="hover:text-amber-700">
              Encontrar vagas
            </Link>
            <Link href="/contato" className="hover:text-amber-700">
              Contato
            </Link>
            <Link href="/termos" className="hover:text-amber-700">
              Termos de uso
            </Link>
            <Link href="/privacidade" className="hover:text-amber-700">
              Privacidade
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}