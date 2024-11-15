import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Welcome, traveler... the Force has led you here."],
    typeSpeed: 50,
  });

  const rootResponse: RootResponse[] = [
    { name: "people", image: "/images/people.webp" },
    { name: "films", image: "/images/films.webp" },
    { name: "starships", image: "/images/starships.webp" },
    { name: "vehicles", image: "/images/vehicles.webp" },
    { name: "species", image: "/images/species.webp" },
    { name: "planets", image: "/images/planets.webp" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <div className="w-fit flex">
        <h1 className="text-4xl font-bold text-center">
          <span>{text}</span>
          <span>
            <Cursor />
          </span>
        </h1>
      </div>
      <div className="w-full flex flex-col items-center gap-10">
        <h2 className="uppercase text-2xl font-semibold">explore:</h2>
        <div className="flex w-full justify-around  gap-5 flex-wrap max-w-4xl">
          {rootResponse.map((response) => (
            <div
              key={response.name}
              className="animate-fadeInUp opacity-0 transform translate-y-12 transition-all"
            >
              <Link
                to={`/${response.name}`}
                className="rounded-lg hover:shadow-lg hover:shadow-gray-600 transition-all duration-300 ease-in-out relative w-56 h-56 flex items-center justify-center overflow-hidden"
              >
                <span className="text-3xl z-20 font-bold font-mono capitalize">
                  {response.name}
                </span>
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
                <img
                  src={response.image}
                  alt={response.name}
                  className="absolute top-0 left-0 w-56 h-56 object-cover"
                  loading="lazy"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
