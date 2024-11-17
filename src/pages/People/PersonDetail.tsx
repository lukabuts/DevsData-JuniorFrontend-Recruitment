import { useParams } from "react-router-dom";
import useFetchPaginatedData from "../../hooks/useFetchData";
import InfoCard from "../../components/Cards/InfoCard";
import ListCard from "../../components/Cards/ListCard";
import DetailPageWrapper from "../../components/Wrappers/DetailPageWrapper";
const PersonDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data, isError, error } = useFetchPaginatedData<Person>({
    url: "https://swapi.dev/api/people",
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
            <InfoCard label="Birth Year" value={data.birth_year} />
            <InfoCard label="Gender" value={data.gender} />
            <InfoCard label="Height" value={`${data.height} cm`} />
            <InfoCard label="Mass" value={`${data.mass} kg`} />
            <InfoCard label="Hair Color" value={data.hair_color} />
            <InfoCard label="Eye Color" value={data.eye_color} />
            <InfoCard label="Skin Color" value={data.skin_color} />
          </div>

          <div className="mt-10 space-y-8">
            <ListCard items={data.films} type="films" />
            <ListCard items={data.starships} type="starships" />
            <ListCard items={data.vehicles} type="vehicles" />
          </div>
        </>
      )}
    </DetailPageWrapper>
  );
};

export default PersonDetail;
