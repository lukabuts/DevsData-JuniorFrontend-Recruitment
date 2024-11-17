import useFetchData from "../../hooks/useFetchData";
import useHandleDataFiltering from "../../hooks/useHandleDataFiltering";
import DataItemWrapper from "../../components/Wrappers/DataItemWrapper";
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
    <PageWrapper
      title="Characters"
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
        data.results.map((person) => (
          <DataItemWrapper
            key={person.name}
            to={`/people/${person.url.split("/")[5]}`}
          >
            <h2 className="text-lg font-semibold text-white">{person.name}</h2>
            <p className="text-gray-400">
              <strong>Birth Year:</strong> {person.birth_year}
            </p>
            <p className="text-gray-400">
              <strong>Gender:</strong> {person.gender}
            </p>
          </DataItemWrapper>
        ))}
    </PageWrapper>
  );
};

export default People;
