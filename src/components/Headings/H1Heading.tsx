const H1Heading = ({ children, className }: H1HeadingProps) => {
  return (
    <h1
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${className}`}
    >
      {children}
    </h1>
  );
};

export default H1Heading;
