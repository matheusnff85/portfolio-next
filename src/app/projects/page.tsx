import { Navbar } from "../components/navbar";
import { allPosts } from "../../../.contentlayer/generated/index.mjs";
import { Article } from "./article";
import { Card } from "../components/card";
import { Post } from "../../../.contentlayer/generated";
import Link from "next/link";

export default function Projects() {
  const sorted = allPosts.sort(
    (a, b) =>
      new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
      new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
  );
  return (
    <div className="relative pb-16">
      <Navbar />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projetos
          </h2>
          <p className="mt-4 text-zinc-400">
            Alguns dos projetos em que trabalhei e criei, você pode visualizar
            todos no meu{" "}
            <Link
              target="_blank"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              href="https://github.com/matheusnff85"
            >
              Github
            </Link>
            .
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project._raw.flattenedPath}>
                  <Article project={project as Post} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project._raw.flattenedPath}>
                  <Article project={project as Post} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project._raw.flattenedPath}>
                  <Article project={project as Post} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
