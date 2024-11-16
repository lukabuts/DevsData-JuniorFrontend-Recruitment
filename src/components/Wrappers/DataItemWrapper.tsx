import { Link } from "react-router-dom";

const DataItemWrapper = ({ to, children }: DataItemWrapperProps) => {
  return (
    <Link
      to={to}
      className="block p-4 rounded-lg border border-gray-700 hover:bg-gray-800 transition duration-200 backdrop-blur-lg"
    >
      {children}
    </Link>
  );
};

export default DataItemWrapper;
