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
    <PageWrapper>
      <H1Heading className="text-center mb-6">Star Wars Starships</H1Heading>
      <SearchCard
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeholder="Search for a starship..."
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
            {data.results.map((starship) => (
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
          </DataGridWrapper>
          <DataCountCard count={data.count} type="starship" />
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
            text="No Starships Found With Name"
          />
        )
      )}
    </PageWrapper>
  );
};

export default Starships;
