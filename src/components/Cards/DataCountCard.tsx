const DataCountCard = ({ count, type }: DataCountCardProps) => {
  return (
    <div className="text-right mt-3">
      <p className="text-gray-400">
        Found <strong className="underline">{count}</strong> {type}
        {count > 1 ? "s" : ""}
      </p>
    </div>
  );
};

export default DataCountCard;
