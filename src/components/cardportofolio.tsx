"use client";

type Portfolio = {
  title: string;
  description: string;
  image?: { src: string; alt?: string }[];
  tags: string[];
  githubUrl?: string;
};

type Props = {
  portfolios: Portfolio[];
};

export default function CardPortfolio({ portfolios }: Props) {
  if (!portfolios || portfolios.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-10 mb-10">
        <p className="text-gray-500">Aucun projet pour le moment.</p>
      </div>
    );
  }

  return (
    <>
      {portfolios.map((project, index) => (
        <div
          key={index}
          className="bg-[linear-gradient(to_right,_#f6a975,_#ffffff)] w-200 flex-wrap shadow-md rounded-2xl"
        >
          <div className="flex flex-row items-center justify-center mt-10 mb-2 gap-4 mr-10 ml-10">
            {project.image &&
              project.image.map((tag, idx) => (
                <div
                  key={idx}
                  className={`shadow-xl mx-auto my-10 overflow-hidden ${
                    project.title === "Cinéfilms"
                      ? " border-black bg-black border-[10px] rounded-[40px]"
                      : " bg-white border-[3px] border-orange-300 rounded-[20px]"
                  }`}
                >
                  <img
                    src={tag.src}
                    alt={tag.alt || project.title}
                    className="w-full h-90 object-contain rounded-t-2xl transform hover:scale-105 duration-300"
                  />
                </div>
              ))}
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-orange-100 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-orange-200 transition duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Voir sur GitHub →
              </a>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
