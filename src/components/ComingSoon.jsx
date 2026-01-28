import { useEffect, useState } from "react";

export default function ComingSoon() {
  const launchDate = "2026-02-15T00:00:00";

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = new Date(launchDate) - new Date();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = String(
        Math.floor(difference / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((difference / (1000 * 60)) % 60)
      ).padStart(2, "0");
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
        2,
        "0"
      );

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        relative
        w-full
        h-[55vh]
        max-h-[560px]
        min-h-[380px]
        overflow-hidden
        bg-black
        flex
        items-center
        justify-center
      "
    >
      {/* ================= VIDEO ================= */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          absolute inset-0
          w-full h-full
          object-contain
        "
      >
        <source
          src="https://storage.googleapis.com/galery-colombia/santa-marta/videos/COMING%20SOON.webm"
          type="video/webm"
        />
      </video>

      {/* ================= OVERLAY SUAVE ================= */}
      <div className="absolute inset-0 bg-black/20" />

      {/* ================= CONTENIDO ================= */}
      <div className="relative z-10 w-full max-w-3xl px-4 text-center">
        {/* TITULO */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          La nueva forma de viajar seguro
        </h1>

        {/* SUBTITULO */}
        <p className="mt-2 text-gray-300 text-sm sm:text-base">
          UserHosts verificados · Reservas inteligentes · 24/7
        </p>

        {/* ================= COUNTDOWN ================= */}
        <div className="mt-8 grid grid-cols-4 gap-3 sm:gap-4">
          {[
            { label: "Días", value: timeLeft.days },
            { label: "Horas", value: timeLeft.hours },
            { label: "Min", value: timeLeft.minutes },
            { label: "Seg", value: timeLeft.seconds },
          ].map((item, i) => (
            <div
              key={i}
              className="
                flex flex-col items-center justify-center
                bg-white/10 backdrop-blur-md
                px-3 py-3 sm:px-5 sm:py-4
                rounded-xl
                border border-white/20
              "
            >
              <span className="text-xl sm:text-3xl font-extrabold text-white">
                {item.value}
              </span>
              <span className="text-[10px] sm:text-xs text-gray-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA DISCRETO */}
        <div className="mt-6">
          <a
            href="/contact"
            className="
              inline-block
              px-6 py-2
              text-sm font-medium
              text-white
              border border-white/30
              rounded-full
              hover:bg-white/10
              transition
            "
          >
            Quiero saber más
          </a>
        </div>

        {/* MICRO CONFIANZA */}
        <div className="mt-4 flex justify-center gap-6 text-gray-300 text-xs">
          <span>✔ UserHosts verificados</span>
          <span>✔ Pagos seguros</span>
          <span>✔ Soporte 24/7</span>
        </div>
      </div>
    </section>
  );
}
