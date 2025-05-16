import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-500">
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-burdeos drop-shadow-lg text-center">
          Cartas sin marcar
        </h1>
        <p className="text-lg text-negroprofundo text-center max-w-md">
          Un lugar donde enviar cartas a la antigua
        </p>
        <div className="flex gap-4 mt-8">
          <a href="/cartas">
            <button className="px-6 py-3 rounded-full bg-burdeos text-white font-bold shadow bg-[#a13a4a] transition cursor-pointer">
              Ver cartas disponibles
            </button>
          </a>
          <a href="/nueva-carta">
            <button className="px-6 py-3 rounded-full bg-amarillo text-burdeos font-bold shadow border border-burdeos bg-yellow-300 transition cursor-pointer">
              Añadir nueva carta
            </button>
          </a>
          <a href="/tutorial">
            <button className="px-6 py-3 rounded-full bg-[#bfa77a] text-white font-bold shadow transition cursor-pointer">
              Ir al tutorial
            </button>
          </a>
        </div>
      </main>
    </div>
  );
}
