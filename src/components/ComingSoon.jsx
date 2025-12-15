import { useEffect, useState } from "react";

export default function ComingSoon() {
  const launchDate = "2026-01-30T00:00:00";

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
  }, [launchDate]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black px-4">
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
      >
        <source
          src="https://storage.googleapis.com/galery-colombia/santa-marta/videos/santa-marta_video_1749063745412_272dfdf1-e472-4b9e-b2e2-e4e3102ad002.mp4"
          type="video/mp4"
        />
      </video>

      {/* GRADIENT DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/85 backdrop-blur-sm"></div>

      {/* ORBS */}
      <div className="absolute -top-20 -left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#C69A39]/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 sm:w-96 sm:h-96 bg-white/10 blur-3xl rounded-full animate-pulse"></div>

      {/* CONTENT */}
      <div className="relative z-20 text-center max-w-2xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg animate-fadeInUp">
          🚘 HostCar24H
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 bg-gradient-to-r from-[#C69A39] to-white bg-clip-text text-transparent animate-fadeInUp delay-100">
          ¡Muy Pronto!
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 mt-4 leading-relaxed animate-fadeInUp delay-200">
          Una nueva experiencia premium de transporte está en camino. Viajes
          seguros, exclusivos y personalizados.
        </p>

        {/* COUNTDOWN – TOTALMENTE OPTIMIZADO */}
        <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 justify-center animate-fadeInUp delay-300">
          {[
            { label: "Días", value: timeLeft.days },
            { label: "Horas", value: timeLeft.hours },
            { label: "Minutos", value: timeLeft.minutes },
            { label: "Segundos", value: timeLeft.seconds },
          ].map((item, i) => (
            <div
              key={i}
              className="
                flex flex-col items-center justify-center 
                bg-white/10 backdrop-blur-xl shadow-lg 
                px-2 py-1 
                sm:px-4 sm:py-3 
                md:px-6 md:py-4
                lg:px-10 lg:py-5   /* ANCHO en DESKTOP */
                rounded-xl border border-white/20 
                w-full
              "
            >
              <span className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                {item.value}
              </span>
              <span className="text-[10px] sm:text-sm text-gray-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="mt-10 px-8 py-3 sm:px-10 sm:py-4 bg-[#C69A39] text-white font-semibold text-lg rounded-xl shadow-[0_0_15px_rgba(198,154,57,0.7)] hover:shadow-[0_0_35px_rgba(198,154,57,0.9)] hover:-translate-y-1 transition-all duration-300 animate-fadeInUp delay-500">
          Notifícame cuando lancen
        </button>
      </div>

      {/* ANIMACIONES */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </section>
  );
}
