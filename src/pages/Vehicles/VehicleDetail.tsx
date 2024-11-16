import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import useFetchPaginatedData from "../../hooks/useFetchData";
import InfoCard from "../../components/Cards/InfoCard";
import ListCard from "../../components/Cards/ListCard";
import ErrorCard from "../../components/Cards/ErrorCard";
import H1Heading from "../../components/Headings/H1Heading";

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data, isError, error } = useFetchPaginatedData<Vehicle>({
    url: "https://swapi.dev/api/vehicles",
    id,
  });

  if (isLoading) return <Loading />;

  if (isError) return <ErrorCard message={error?.message} />;

  if (data)
    return (
      <div className="max-w-4xl mx-auto backdrop-blur-lg bg-gray-900/80 text-white p-8 rounded-xl shadow-2xl w-full">
        <H1Heading className="mb-8 text-center">{data.name}</H1Heading>
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
      </div>
    );
};

export default VehicleDetail;
