import Loading from "../../components/Loading/Loading";
import PaginationButtons from "../../components/PaginationButtons/PaginationButtons";
import useFetchData from "../../hooks/useFetchData";
import ErrorCard from "../../components/Cards/ErrorCard";
import useHandleDataFiltering from "../../hooks/useHandleDataFiltering";
import DataGridWrapper from "../../components/Wrappers/DataGridWrapper";
import DataItemWrapper from "../../components/Wrappers/DataItemWrapper";
import NoDataFoundCard from "../../components/Cards/NoDataFoundCard";
import DataCountCard from "../../components/Cards/DataCountCard";
import PageWrapper from "../../components/Wrappers/PageWrapper";

const Films = () => {
  // Filtering Data
  const {
    navigate,
    handlePageChange,
    handleSearch,
    filters,
    searchTerm,
    setSearchTerm,
  } = useHandleDataFiltering();

  // Fetching data
  const { isLoading, data, isError, error } = useFetchData<FilmResponse>({
    url: "https://swapi.dev/api/films",
    filters,
  });

  return (
    <PageWrapper
      title="Films"
      handleSearch={handleSearch}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      navigate={navigate}
      search={filters.search}
    >
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorCard message={error?.message} />
      ) : data && data.count > 0 ? (
        <>
          <DataGridWrapper>
            {data.results.map((film) => (
              <DataItemWrapper
                to={`/films/${film.url.split("/")[5]}`}
                key={film.title}
              >
                <h2 className="text-lg font-semibold text-white">
                  {film.title}
                </h2>
                <p className="text-gray-400">
                  <strong>Director:</strong> {film.director}
                </p>
                <p className="text-gray-400">
                  <strong>Producer:</strong> {film.producer}
                </p>
                <p className="text-gray-400">
                  <strong>Release Date:</strong> {film.release_date}
                </p>
              </DataItemWrapper>
            ))}
          </DataGridWrapper>
          <DataCountCard count={data.count} type="film" />
          <PaginationButtons
            page={filters.page}
            setPage={handlePageChange}
            previous={data.previous}
            next={data.next}
          />
        </>
      ) : (
        data?.count === 0 && (
          <NoDataFoundCard
            search={filters.search}
            text="No Films Found With Title"
          />
        )
      )}
    </PageWrapper>
  );
};

export default Films;
