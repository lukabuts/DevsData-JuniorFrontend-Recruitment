import { useParams } from "react-router-dom";
import useFetchPaginatedData from "../../hooks/useFetchData";
import InfoCard from "../../components/Cards/InfoCard";
import ListCard from "../../components/Cards/ListCard";
import DetailPageWrapper from "../../components/Wrappers/DetailPageWrapper";

const StarshipDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data, isError, error } = useFetchPaginatedData<Starship>({
    url: "https://swapi.dev/api/starships",
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
            <InfoCard label="Class" value={data.starship_class} />
          </div>

          <div className="mt-10 space-y-8">
            <ListCard items={data.films} type="films" />
            <ListCard items={data.pilots} type="people" />
          </div>
        </>
      )}
    </DetailPageWrapper>
  );
};

export default StarshipDetail;
