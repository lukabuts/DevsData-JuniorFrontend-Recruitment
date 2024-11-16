const SearchCard = ({
  handleSearch,
  searchTerm,
  setSearchTerm,
  placeholder,
}: SearchCardProps) => {
  const searchWord = searchTerm ? searchTerm : "";
  return (
    <form onSubmit={handleSearch} className="mb-6 flex justify-center">
      <input
        type="search"
        placeholder={placeholder}
        value={searchWord}
        className="p-2 w-full max-w-80 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className={`ml-2 p-2 rounded-md transition ${
          searchWord.trim().length === 0
            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        disabled={searchWord.trim().length === 0}
        aria-label="Search"
      >
        Search
      </button>
    </form>
  );
};

export default SearchCard;
