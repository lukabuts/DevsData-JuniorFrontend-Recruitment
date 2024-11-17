import ReactPaginate from "react-paginate";
import AngleIcon from "../../assets/icons/AngleIcon";

const PaginationButtons = ({
  page,
  setPage,
  pageLength,
}: PaginationButtonsProps) => {
  const handlePageClick = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  if (pageLength > 1)
    return (
      <div className="flex justify-center items-center mt-8 ">
        <ReactPaginate
          previousLabel={
            <div className="flex items-center gap-2 text-blue-400 hover:underline">
              <AngleIcon className="fill-blue-400 size-4 rotate-180" />
              <span className="sm:block hidden">Previous</span>
            </div>
          }
          nextLabel={
            <div className="flex items-center gap-2 text-blue-400 hover:underline">
              <span className="sm:block hidden">Next</span>
              <AngleIcon className="fill-blue-400 size-4" />
            </div>
          }
          onPageChange={handlePageClick}
          pageCount={pageLength}
          forcePage={page - 1}
          containerClassName="flex items-center gap-4 sm:scale-100 scale-90"
          pageClassName="text-blue-400 hover:underline px-2 pointer"
          activeClassName="font-bold underline"
          previousClassName="flex items-center"
          nextClassName="flex items-center"
          breakLabel="..."
          breakClassName="px-2"
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
        />
      </div>
    );

  return null;
};

export default PaginationButtons;
