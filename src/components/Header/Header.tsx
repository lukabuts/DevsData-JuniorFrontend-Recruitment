import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StarshipIcon from "../../assets/icons/StarshipIcon";
import BurgerButton from "../BurgerButton/BurgerButton";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const linkClassName = `hover:text-gray-400 ${
    isOpen && screenWidth < 750 ? "px-4 py-2" : ""
  }`;

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
        <Link to="/" className="flex items-center space-x-2">
          <StarshipIcon className="w-10 h-10 fill-white" />
        </Link>

        <nav
          className={`text-lg overflow-hidden transition-all ${
            screenWidth > 750
              ? "items-center gap-6 flex"
              : "duration-300 flex absolute top-20 left-0 w-full flex-col items-end"
          }  ${
            isOpen && screenWidth < 750
              ? "h-56 bg-black/90"
              : screenWidth < 750 && "h-0"
          } `}
        >
          <Link to="/people" className={linkClassName}>
            People
          </Link>
          <Link to="/films" className={linkClassName}>
            Films
          </Link>
          <Link to="/starships" className={linkClassName}>
            Starships
          </Link>
          <Link to="/vehicles" className={linkClassName}>
            Vehicles
          </Link>
          <Link to="/species" className={linkClassName}>
            Species
          </Link>
        </nav>
        {screenWidth < 750 && (
          <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </div>
    </header>
  );
};

export default Header;
