const ErrorCard = ({ message }: ErrorCardProps) => {
  return (
    <div className="text-center text-red-500">
      <p className="font-semibold">Error: {message}</p>
    </div>
  );
};

export default ErrorCard;