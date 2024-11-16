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

const Vehicles = () => {
  const {
    navigate,
    handlePageChange,
    handleSearch,
    filters,
    searchTerm,
    setSearchTerm,
  } = useHandleDataFiltering();

  const { isLoading, data, isError, error } = useFetchData<VehicleResponse>({
    url: "https://swapi.dev/api/vehicles",
    filters,
  });

  return (
    <PageWrapper
      title="Vehicles"
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
            {data.results.map((vehicle) => (
              <DataItemWrapper
                to={`/vehicles/${vehicle.url.split("/")[5]}`}
                key={vehicle.name}
              >
                <h2 className="text-lg font-semibold text-white">
                  {vehicle.name}
                </h2>
                <p className="text-gray-400">
                  <strong>Model:</strong> {vehicle.model}
                </p>
                <p className="text-gray-400">
                  <strong>Manufacturer:</strong> {vehicle.manufacturer}
                </p>
                <p className="text-gray-400">
                  <strong>Vehicle Class:</strong> {vehicle.vehicle_class}
                </p>
              </DataItemWrapper>
            ))}
          </DataGridWrapper>
          <DataCountCard count={data.count} type="vehicle" />
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
            text="No Vehicles Found With Name"
          />
        )
      )}
    </PageWrapper>
  );
};

export default Vehicles;
