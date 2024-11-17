import useFetchData from "../../hooks/useFetchData";
import useHandleDataFiltering from "../../hooks/useHandleDataFiltering";
import DataItemWrapper from "../../components/Wrappers/DataItemWrapper";
import PageWrapper from "../../components/Wrappers/PageWrapper";

const Starships = () => {
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
  const { isLoading, data, isError, error } = useFetchData<StarshipResponse>({
    url: "https://swapi.dev/api/starships",
    filters,
  });

  return (
    <PageWrapper
      title="Starships"
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
        data.results.map((starship) => (
          <DataItemWrapper
            to={`/starships/${starship.url.split("/")[5]}`}
            key={starship.name}
          >
            <h2 className="text-lg font-semibold text-white">
              {starship.name}
            </h2>
            <p className="text-gray-400">
              <strong>Model:</strong> {starship.model}
            </p>
            <p className="text-gray-400">
              <strong>Manufacturer:</strong> {starship.manufacturer}
            </p>
            <p className="text-gray-400">
              <strong>Class:</strong> {starship.starship_class}
            </p>
          </DataItemWrapper>
        ))}
    </PageWrapper>
  );
};

export default Starships;
