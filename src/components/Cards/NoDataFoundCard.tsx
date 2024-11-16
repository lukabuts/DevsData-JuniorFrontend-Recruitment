const NoDataFoundCard = ({ search, text }: NoDataFoundCardProps) => {
  return (
    <div className="text-center text-white text-xl">
      <span>
        {text}: <strong className="italic underline">{search}</strong>{" "}
        :&#40;&#40;
      </span>
    </div>
  );
};

export default NoDataFoundCard;
