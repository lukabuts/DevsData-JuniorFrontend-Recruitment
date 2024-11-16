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
    <div className="max-w-6xl mx-auto w-full">
      <H1Heading className="text-center mb-6">Star Wars Species</H1Heading>
      <SearchCard
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeholder="Search for a species..."
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
            {data.results.map((species) => (
              <DataItemWrapper
                to={`/species/${species.url.split("/")[5]}`}
                key={species.name}
              >
                <h2 className="text-lg font-semibold text-white">
                  {species.name}
                </h2>
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
          </DataGridWrapper>
          <DataCountCard count={data.count} type="species" />
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
            text="No Species Found With Name"
          />
        )
      )}
    </div>
  );
};

export default Species;
