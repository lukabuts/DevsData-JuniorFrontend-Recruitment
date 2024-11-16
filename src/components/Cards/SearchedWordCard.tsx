import ExitIcon from "../../assets/icons/ExitIcon";

const SearchedWordCard = ({ navigate, search }: SearchedWordCardProps) => {
  return (
    <div className="bg-gray-800 rounded-xl px-4 py-2 shadow-lg w-fit flex items-center gap-2 mb-6">
      <span className="text-md">{search}</span>
      <button
        onClick={() => {
          navigate({ search: "", page: 1 });
        }}
      >
        <ExitIcon className="w-3 h-3 fill-white" />
      </button>
    </div>
  );
};

export default SearchedWordCard;
