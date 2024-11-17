import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import StarshipIcon from "../../assets/icons/StarshipIcon";
import BurgerButton from "../BurgerButton/BurgerButton";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const navigate = useNavigate();

  const pages: string[] = [
    "people",
    "films",
    "starships",
    "vehicles",
    "species",
    "planets",
  ];

  useEffect(() => {
    // Handle Scrolling
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Handle Resizing
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    setScreenWidth(window.innerWidth);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`fixed flex w-full top-0 z-50 h-20 transition-all duration-300 ${
        isScrolled || (isOpen && screenWidth < 750) ? "bg-black/90" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center w-full">
        <button onClick={() => navigate("/")} aria-label="Home">
          <StarshipIcon className="w-10 h-10 fill-white" />
        </button>

        <nav
          className={`text-lg overflow-hidden transition-all ${
            screenWidth > 750
              ? "items-center gap-6 flex"
              : "duration-300 flex absolute top-20 left-0 w-full flex-col items-end"
          }  ${
            isOpen && screenWidth < 750
              ? "bg-black/90 h-[16.5rem]"
              : screenWidth < 750 && "h-0"
          } `}
        >
          {pages.map((page) => (
            <Link
              key={page}
              to={`/${page}`}
              className={`hover:text-gray-400 capitalize first:pt-0 ${
                screenWidth < 750 ? "px-4 py-2" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {page}
            </Link>
          ))}
        </nav>
        {screenWidth < 750 && (
          <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </div>
    </header>
  );
};

export default Header;
