import useFetchData from "../../hooks/useFetchData";
import useHandleDataFiltering from "../../hooks/useHandleDataFiltering";
import DataItemWrapper from "../../components/Wrappers/DataItemWrapper";
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
      filters={filters}
      handlePageChange={handlePageChange}
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
    >
      {data &&
        data.results.map((film) => (
          <DataItemWrapper
            to={`/films/${film.url.split("/")[5]}`}
            key={film.title}
          >
            <h2 className="text-lg font-semibold text-white">{film.title}</h2>
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
    </PageWrapper>
  );
};

export default Films;
