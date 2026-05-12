const App = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <img
          src="/hidroreabilitar-logo.svg"
          alt="Logo HIDROREABILITAR - Dra. Camila Mendes"
          className="mx-auto mb-8 w-full max-w-md rounded-lg bg-white/90 p-4 shadow-2xl shadow-black/40"
        />
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          Movimento sem dor.
          <br />
          Vida com mais qualidade.
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-lg text-zinc-200 md:text-xl">
          Reabilitação aquática e fisioterapia especializada para adultos,
          atletas e neuropediatria, com cuidado individualizado.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contato"
            className="rounded-md bg-amber-400 px-6 py-3 font-bold text-black transition hover:brightness-110"
          >
            Agendar Avaliação
          </a>
          <a
            href="#tratamentos"
            className="rounded-md border border-amber-300 px-6 py-3 font-semibold text-amber-200 transition hover:bg-amber-300 hover:text-black"
          >
            Ver Tratamentos
          </a>
        </div>
      </section>

      <section id="tratamentos" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Tratamentos</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Hidroterapia",
            "Hidroginástica",
            "Fisioterapia Neurológica",
            "Reabilitação de Atletas",
            "Fisioterapia Domiciliar",
            "Liberação Miofascial",
            "Massagem Relaxante",
            "Fisioterapia Completa",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-4"
            >
              <p className="font-semibold text-amber-200">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl bg-white/5 p-8 text-center backdrop-blur">
          <h2 className="mb-3 text-3xl font-bold">Fale com a nossa equipe</h2>
          <p className="mb-6 text-zinc-200">
            Atendimento humanizado com foco em resultado funcional.
          </p>
          <a
            href="https://wa.me/5588996425515"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-green-500 px-8 py-3 text-lg font-bold text-white transition hover:bg-green-600"
          >
            WhatsApp: (88) 99642-5515
          </a>
        </div>
      </section>
    </main>
  );
};

export default App;
