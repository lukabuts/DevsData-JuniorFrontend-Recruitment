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

const People = () => {
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
  const { isLoading, data, isError, error } = useFetchData<PeopleResponse>({
    url: "https://swapi.dev/api/people",
    filters,
  });

  return (
    <PageWrapper>
      <H1Heading className="text-center mb-6">Star Wars Characters</H1Heading>
      <SearchCard
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeholder="Search for a character..."
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
            {data.results.map((person) => (
              <DataItemWrapper
                key={person.name}
                to={`/people/${person.url.split("/")[5]}`}
              >
                <h2 className="text-lg font-semibold text-white">
                  {person.name}
                </h2>
                <p className="text-gray-400">
                  <strong>Birth Year:</strong> {person.birth_year}
                </p>
                <p className="text-gray-400">
                  <strong>Gender:</strong> {person.gender}
                </p>
              </DataItemWrapper>
            ))}
          </DataGridWrapper>
          <DataCountCard count={data.count} type="character" />
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
            text="No Characters Found With Name"
          />
        )
      )}
    </PageWrapper>
  );
};

export default People;
