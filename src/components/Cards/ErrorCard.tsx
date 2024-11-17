import BackButton from "../BackButton/BackButton";

const ErrorCard = ({ message }: ErrorCardProps) => {
  return (
    <>
      <div className="text-center text-red-500 mt-16">
        <p className="font-semibold">Error: {message}</p>
      </div>
      <BackButton>Go Back</BackButton>
    </>
  );
};

export default ErrorCard;
