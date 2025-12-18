import ComingSoon from "../components/ComingSoon";

function Home() {
  return (
    <div className="font-sans text-[#0A1B3B] bg-white overflow-x-hidden">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 z-50 w-full max-w-full bg-white/90 backdrop-blur-md border-b border-gray-200 overflow-x-hidden">
        <div className="flex items-center justify-between px-6 py-4">
          {/* LOGO IZQUIERDA */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/logos/hostcar-logo-navbar-2.png"
              alt="HostCar24H logo"
              className="w-9 h-9"
            />
            <span className="text-xl font-extrabold tracking-tight text-[#C69A39]">
              HostCar24H
            </span>
          </a>

          {/* CTA DERECHA */}
          <a
            href="/contact"
            className="text-sm px-5 py-2 bg-[#C69A39] text-white rounded-md font-medium hover:opacity-90 transition"
          >
            Contacto
          </a>
        </div>
      </nav>

      {/* ================= HERO VIDEO (FULL WIDTH) ================= */}
      <div className="pt-20 w-full max-w-full overflow-x-hidden">
        <ComingSoon />
      </div>

      {/* ================= CONTENIDO ================= */}
      <section className="px-6 py-24 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold leading-tight mb-4">
          Tu experiencia segura y de calidad en movilidad
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          En HostCar24H conectamos usuarios con UserHosts validados para ofrecer
          un servicio de transporte confiable, seguro y rápido.
        </p>

        <a
          href="https://hostcar-clients.vercel.app/"
          className="inline-block px-8 py-3 text-white bg-[#0A1B3B] rounded-md text-lg hover:bg-[#081325] transition"
        >
          Ir al Portal
        </a>
      </section>

      {/* ================= SERVICIOS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-[#F6F6F6] p-8 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Reservas rápidas</h3>
          <p className="text-gray-600">
            Haz una reserva en menos de un minuto desde cualquier dispositivo.
          </p>
        </div>

        <div className="bg-[#F6F6F6] p-8 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">UserHosts verificados</h3>
          <p className="text-gray-600">
            Todos nuestros conductores pasan un proceso de validación
            documental.
          </p>
        </div>

        <div className="bg-[#F6F6F6] p-8 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">
            Métodos de pago seguros
          </h3>
          <p className="text-gray-600">
            Selecciona entre los medios disponibles con total confianza.
          </p>
        </div>
      </section>

      {/* ================= POR QUÉ ELEGIRNOS ================= */}
      <section className="bg-[#0A1B3B] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Por qué elegir HostCar24H?</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Tecnología, seguridad y atención personalizada para ofrecer una
          experiencia de movilidad superior.
        </p>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-2xl font-bold mb-3">¿Listo para comenzar?</h3>
        <p className="text-gray-600 mb-6">
          Pronto podrás acceder a todas las funciones desde nuestra plataforma.
        </p>
        <a
          href="#"
          className="px-8 py-3 bg-[#C69A39] text-white rounded-md text-lg hover:opacity-90 transition"
        >
          Próximamente
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white py-6 text-center text-sm">
        © {new Date().getFullYear()} HostCar24H — Todos los derechos reservados
      </footer>
    </div>
  );
}

export default Home;
