import useFetchData from "../../hooks/useFetchData";
import useHandleDataFiltering from "../../hooks/useHandleDataFiltering";
import DataItemWrapper from "../../components/Wrappers/DataItemWrapper";
import PageWrapper from "../../components/Wrappers/PageWrapper";

const Planets = () => {
  const {
    navigate,
    handlePageChange,
    handleSearch,
    filters,
    searchTerm,
    setSearchTerm,
  } = useHandleDataFiltering();

  const { isLoading, data, isError, error } = useFetchData<PlanetResponse>({
    url: "https://swapi.dev/api/planets",
    filters,
  });

  return (
    <PageWrapper
      title="Planets"
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
        data.results.map((planet) => (
          <DataItemWrapper
            to={`/planets/${planet.url.split("/")[5]}`}
            key={planet.name}
          >
            <h2 className="text-lg font-semibold text-white">{planet.name}</h2>
            <p className="text-gray-400">
              <strong>Climate:</strong> {planet.climate}
            </p>
            <p className="text-gray-400">
              <strong>Terrain:</strong> {planet.terrain}
            </p>
            <p className="text-gray-400">
              <strong>Population:</strong>{" "}
              {Number(planet.population).toLocaleString()}
            </p>
            <p className="text-gray-400">
              <strong>Orbital Period:</strong> {planet.orbital_period} days
            </p>
          </DataItemWrapper>
        ))}
    </PageWrapper>
  );
};

export default Planets;
