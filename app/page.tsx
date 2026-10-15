export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-green-500 uppercase tracking-[6px] font-semibold">
          Batch of Survivors
        </p>

        <h1 className="text-6xl md:text-8xl font-black mt-6">
          BCA<span className="text-green-500">WALE</span>
        </h1>

        <p className="text-xl text-zinc-400 mt-8">
          Degree ke liye aaye the.
        </p>

        <p className="text-3xl md:text-5xl font-bold mt-2">
          Gang ban gaya. 💀
        </p>

        <button className="mt-12 rounded-xl bg-green-500 px-8 py-4 text-lg font-bold text-black transition hover:scale-105 hover:bg-green-400">
          Join The Gang
        </button>
      </div>
    </main>
  );
}