import { useParams } from "react-router-dom";
import InfoCard from "../../components/Cards/InfoCard";
import ListCard from "../../components/Cards/ListCard";
import useFetchData from "../../hooks/useFetchData";
import DetailPageWrapper from "../../components/Wrappers/DetailPageWrapper";

const SpeciesDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data, isError, error } = useFetchData<Species>({
    url: `https://swapi.dev/api/species`,
    id,
  });

  if (data)
    return (
      <DetailPageWrapper
        isLoading={isLoading}
        isError={isError}
        error={error}
        title={data.name}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InfoCard label="Classification" value={data.classification} />
          <InfoCard label="Designation" value={data.designation} />
          <InfoCard label="Average Height" value={data.average_height} />
          <InfoCard label="Average Lifespan" value={data.average_lifespan} />
          <InfoCard label="Eye Colors" value={data.eye_colors} />
          <InfoCard label="Hair Colors" value={data.hair_colors} />
          <InfoCard label="Skin Colors" value={data.skin_colors} />
          <InfoCard label="Language" value={data.language} />
        </div>

        <div className="mt-10 space-y-8">
          <ListCard items={data.people} type="people" />
          <ListCard items={data.films} type="films" />
        </div>
      </DetailPageWrapper>
    );
};

export default SpeciesDetail;
