import { useNavigate } from "react-router-dom";

const BackButton = ({ children }: BackButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="text-blue-500 hover:text-blue-400 font-semibold"
    >
      {children}
    </button>
  );
};

export default BackButton;
