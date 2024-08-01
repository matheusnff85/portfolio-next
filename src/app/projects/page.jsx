import { Navbar } from "../components/navbar";

export default function Projects() {
  return (
    <div className="relative pb-16">
      <Navbar />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projetos
          </h2>
          <p className="mt-4 text-zinc-400">
            Alguns dos projetos em que trabalhei.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
      </div>
    </div>
  );
}
