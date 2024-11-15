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
            className="text-blue-400 hover:underline"
          >
            &lt; Previous Page
          </button>
        )}
      </div>
      <div>
        {next && (
          <button
            onClick={() => setPage(page + 1)}
            className="text-blue-400 hover:underline"
          >
            Next Page &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default PaginationButtons;
