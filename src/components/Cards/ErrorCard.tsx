import BackButton from "../BackButton/BackButton";

const ErrorCard = ({ message }: ErrorCardProps) => {
  return (
    <div>
      <div className="text-center text-red-500 mt-16">
        <p className="font-semibold">Error: {message}</p>
      </div>
      <BackButton>Go Back</BackButton>
    </div>
  );
};

export default ErrorCard;
