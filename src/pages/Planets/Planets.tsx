import Loading from "../../components/Loading/Loading";
import PaginationButtons from "../../components/PaginationButtons/PaginationButtons";
import useFetchData from "../../hooks/useFetchData";
import ErrorCard from "../../components/Cards/ErrorCard";
import H1Heading from "../../components/Headings/H1Heading";
import useHandleDataFiltering from "../../hooks/useHandleDataFiltering";
import SearchedWordCard from "../../components/Cards/SearchedWordCard";
import SearchCard from "../../components/Cards/SearchCard";
import DataGridWrapper from "../../components/Wrappers/DataGridWrapper";
import DataItemWrapper from "../../components/Wrappers/DataItemWrapper";
import NoDataFoundCard from "../../components/Cards/NoDataFoundCard";
import DataCountCard from "../../components/Cards/DataCountCard";
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
    <PageWrapper>
      <H1Heading className="text-center mb-6">Star Wars Planets</H1Heading>
      <SearchCard
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeholder="Search for a planet..."
      />
      {filters.search.length > 0 && (
        <SearchedWordCard navigate={navigate} search={filters.search} />
      )}
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorCard message={error?.message} />
      ) : data && data.count > 0 ? (
        <>
          <DataGridWrapper>
            {data.results.map((planet) => (
              <DataItemWrapper
                to={`/planets/${planet.url.split("/")[5]}`}
                key={planet.name}
              >
                <h2 className="text-lg font-semibold text-white">
                  {planet.name}
                </h2>
                <p className="text-gray-400">
                  <strong>Climate:</strong> {planet.climate}
                </p>
                <p className="text-gray-400">
                  <strong>Terrain:</strong> {planet.terrain}
                </p>
                <p className="text-gray-400">
                  <strong>Population:</strong> {planet.population}
                </p>
                <p className="text-gray-400">
                  <strong>Orbital Period:</strong> {planet.orbital_period} days
                </p>
              </DataItemWrapper>
            ))}
          </DataGridWrapper>
          <DataCountCard count={data.count} type="planet" />
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
            text="No Planets Found With Name"
          />
        )
      )}
    </PageWrapper>
  );
};

export default Planets;
