import useFetchData from "../../hooks/useFetchData";
import useHandleDataFiltering from "../../hooks/useHandleDataFiltering";
import DataItemWrapper from "../../components/Wrappers/DataItemWrapper";
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
      filters={filters}
      handlePageChange={handlePageChange}
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
    >
      {data &&
        data.results.map((vehicle) => (
          <DataItemWrapper
            to={`/vehicles/${vehicle.url.split("/")[5]}`}
            key={vehicle.name}
          >
            <h2 className="text-lg font-semibold text-white">{vehicle.name}</h2>
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
    </PageWrapper>
  );
};

export default Vehicles;
