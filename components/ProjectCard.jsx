import Image from "next/image";
import Link from "next/link";

import fashionfames from "@/public/work/aizen.jpg";
import kamui from "@/public/work/kamui.jpg";
import pokedex from "@/public/work/pokedex.jpg";
import portfolio from "@/public/work/portfolio.jpg";
import cryptohunter from "@/public/work/crypto-hunter.jpg";
import redeye from "@/public/work/red-eye.jpg";
import evo from "@/public/work/evo.jpg";
import notion from "@/public/work/notion.jpg";
import nike from "@/public/work/nike.jpg";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      // image: FahionFames,
      title: "Fahion Fames",
      description: "Ecommerce Site",
      link: "https://aizen.netlify.app/",
      target: "_self",
    },
    {
      id: 2,
      // image: ChatApp,
      title: "ChatApp",
      description: "Communicate",
      link: "https://kamui-kanban.netlify.app/",
      target: "_self",
    },
    {
      id: 3,
      // image: SchoolManagementSystem,
      title: "School Management System",
      description: "Gotta Catch'em All. Explore your Pokemon",
      link: "https://github.com/mehak-2/school-management-web-app.git",
      target: "_self",
    },
    {
      id: 4,
      // image: Restro,
      title: "Restaurant Website",
      description: "",
      link: "https://github.com/mehak-2/restaurant-website.git",
      target: "_blank",
    },
    {
      id: 5,
      // image: RealEstateWeb,
      title: "RealEstateWeb",
      description: "Nike Store Landing Page",
      link: "https://github.com/mehak-2/javarealestate-web-.git",
      target: "_blank",
    },
    {
      id: 6,
      // image: notion,
      title: "Potion",
      description: "Connected workspace where better, faster work happens.",
      link: "https://potion-write.vercel.app/",
      target: "_blank",
    },
    {
      id: 7,
      // image: portfolio,
      title: "Blood Bank",
      description: "Portfolio made using Next.js and Tailwind CSS",
      link: "",
      target: "",
    },
    {
      id: 8,
      // image: cryptohunter,
      title: "FreeBud",
      description: "Get the Trending Crypto list with its Price",
      link: "https://crytocurrencyhunter.netlify.app/",
      target: "_self",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                  ? alert(
                      "Ash Ketchum asked you to open in desktop browser.. 🚀"
                    )
                  : "";
              }}
            >
              <Image
                loading="lazy"
                // src={project.image}
                alt={project.title}
                width="200"
                className="rounded-lg drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center text-sm">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
