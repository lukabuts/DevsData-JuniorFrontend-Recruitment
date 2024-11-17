import useFetchData from "../../hooks/useFetchData";
import useHandleDataFiltering from "../../hooks/useHandleDataFiltering";
import DataItemWrapper from "../../components/Wrappers/DataItemWrapper";
import PageWrapper from "../../components/Wrappers/PageWrapper";

const Species = () => {
  const {
    navigate,
    handlePageChange,
    handleSearch,
    filters,
    searchTerm,
    setSearchTerm,
  } = useHandleDataFiltering();

  const { isLoading, data, isError, error } = useFetchData<SpeciesResponse>({
    url: "https://swapi.dev/api/species",
    filters,
  });

  return (
    <PageWrapper
      title="Species"
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
        data.results.map((species) => (
          <DataItemWrapper
            to={`/species/${species.url.split("/")[5]}`}
            key={species.name}
          >
            <h2 className="text-lg font-semibold text-white">{species.name}</h2>
            <p className="text-gray-400">
              <strong>Classification:</strong> {species.classification}
            </p>
            <p className="text-gray-400">
              <strong>Designation:</strong> {species.designation}
            </p>
            <p className="text-gray-400">
              <strong>Average Height:</strong> {species.average_height} cm
            </p>
            <p className="text-gray-400">
              <strong>Average Lifespan:</strong> {species.average_lifespan}{" "}
              years
            </p>
          </DataItemWrapper>
        ))}
    </PageWrapper>
  );
};

export default Species;
