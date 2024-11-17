import { useParams } from "react-router-dom";
import useFetchPaginatedData from "../../hooks/useFetchData";
import InfoCard from "../../components/Cards/InfoCard";
import ListCard from "../../components/Cards/ListCard";
import DetailPageWrapper from "../../components/Wrappers/DetailPageWrapper";

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data, isError, error } = useFetchPaginatedData<Vehicle>({
    url: "https://swapi.dev/api/vehicles",
    id,
  });

  return (
    <DetailPageWrapper
      isError={isError}
      isLoading={isLoading}
      error={error}
      title={data?.name}
    >
      {data && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoCard label="Model" value={data.model} />
            <InfoCard label="Manufacturer" value={data.manufacturer} />
            <InfoCard label="Cost in Credits" value={data.cost_in_credits} />
            <InfoCard label="Length" value={data.length} />
            <InfoCard
              label="Max Atmosphering Speed"
              value={data.max_atmosphering_speed}
            />
            <InfoCard label="Crew" value={data.crew} />
            <InfoCard label="Passengers" value={data.passengers} />
            <InfoCard label="Cargo Capacity" value={data.cargo_capacity} />
            <InfoCard label="Consumables" value={data.consumables} />
            <InfoCard label="Vehicle Class" value={data.vehicle_class} />
          </div>

          <div className="mt-10 space-y-8">
            <ListCard items={data.pilots} type="people" />
            <ListCard items={data.films} type="films" />
          </div>
        </>
      )}
    </DetailPageWrapper>
  );
};

export default VehicleDetail;
