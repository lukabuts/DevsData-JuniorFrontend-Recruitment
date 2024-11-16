import AngleIcon from "../../assets/icons/AngleIcon";

const PaginationButtons = ({
  previous,
  next,
  page,
  setPage,
}: PaginationButtonsProps) => {
  return (
    <div className="flex justify-between items-center mt-8">
      <div>
        {previous && (
          <button
            onClick={() => setPage(page - 1)}
            className="text-blue-400 hover:underline flex items-center gap-2"
          >
            <AngleIcon className="fill-blue-400 size-4 rotate-180" />
            <span>Previous Page</span>
          </button>
        )}
      </div>
      <div>
        {next && (
          <button
            onClick={() => setPage(page + 1)}
            className="text-blue-400 hover:underline flex items-center gap-2"
          >
            <span>Next Page</span>
            <AngleIcon className="fill-blue-400 size-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default PaginationButtons;
