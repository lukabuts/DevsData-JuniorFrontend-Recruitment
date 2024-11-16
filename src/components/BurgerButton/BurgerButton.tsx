const BurgerButton = ({ isOpen, setIsOpen }: BurgerButtonProps) => {
  return (
    <button
      className="h-5 w-7 relative block"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      aria-label="Toggle menu"
    >
      <div className="sr-only">{isOpen ? "Close menu" : "Open menu"}</div>
      <div
        aria-hidden="true"
        className={`absolute h-0.5 w-7 bg-current duration-300 transition-[transform] ease-in-out ${
          isOpen ? "rotate-45" : "-translate-y-1.5"
        }`}
      />
      <div
        aria-hidden="true"
        className={`absolute h-0.5 w-7 bg-current transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        aria-hidden="true"
        className={`absolute h-0.5 w-7 bg-current transition-[transform] duration-300 ease-in-out ${
          isOpen ? "-rotate-45" : "translate-y-1.5"
        }`}
      />
    </button>
  );
};

export default BurgerButton;
