import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Navbar } from "../../components/navbar";
import Link from "next/link";
import "./mdx.css";
import { Mdx } from "../../components/mdx";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const slug = params?.slug;
  const project = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black min-h-screen">
      <Navbar />
      <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              {project.description}
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <Link target="_blank" href={project.githubLink}>
                Repositório Github <span aria-hidden="true">&rarr;</span>
              </Link>
              {project.deployLink ? (
                <Link target="_blank" href={project.githubLink}>
                  Link do Projeto <span aria-hidden="true">&rarr;</span>
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 min-h-screen mx-auto">
        <article className="text-zinc-900 px-4 py-12 mx-auto prose prose-zinc w-1/2">
          <Mdx code={project.body.code} />
        </article>
      </div>
    </div>
  );
}
