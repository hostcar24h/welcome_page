function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center text-[#0A1B3B] font-sans relative">

      {/* NAVBAR */}
      <nav className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-extrabold">
            <img
              src="/logos/hostcar-logo-navbar-2.png"
              className="w-8 h-8"
              alt="HostCar24H"
            />
            <span className="text-[#C69A39]">HostCar24H</span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-12 text-center px-6 max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Una nueva era en transporte especial está por comenzar
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Estamos preparando una plataforma diseñada para viajeros exigentes.
          Seguridad, calidad y atención premium — disponible muy pronto.
        </p>

        {/* CONTADOR */}
        <div className="flex justify-center gap-6 text-center mb-10">
          {["30", "12", "45", "20"].map((num, i) => (
            <div key={i}>
              <div className="text-4xl font-bold">{num}</div>
              <div className="text-xs text-gray-500">
                {["Días", "Horas", "Min", "Seg"][i]}
              </div>
            </div>
          ))}
        </div>

        {/* FORMULARIO CAPTURA EMAIL */}
        <form
          className="flex flex-col sm:flex-row gap-3 justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C69A39]"
          />
          <button
            className="px-6 py-3 bg-[#C69A39] text-white rounded-md hover:bg-[#b18732] transition"
          >
            Notificarme
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4">
          Te avisaremos cuando la plataforma esté disponible.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 py-16 text-center">
        {[
          {
            title: "Viajes confiables",
            text: "Conductores verificados y especializados en transporte premium."
          },
          {
            title: "Atención 24/7",
            text: "Soporte humano siempre disponible para nuestros usuarios."
          },
          {
            title: "Experiencia premium",
            text: "Comodidad, puntualidad y seguridad como estándares."
          }
        ].map((item, i) => (
          <div key={i} className="bg-[#F8F8F8] p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </section>

      {/* CTA WHATSAPP */}
      <div className="text-center pb-20">
        <a
          href="https://wa.me/573205820942"
          className="px-10 py-4 bg-[#0A1B3B] text-white rounded-md text-lg hover:bg-[#081325] transition"
        >
          Contáctanos por WhatsApp
        </a>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-black text-white py-6 text-center text-sm mt-auto">
        © {new Date().getFullYear()} HostCar24H — Muy pronto disponible
      </footer>
    </div>
  );
}

export default Home;