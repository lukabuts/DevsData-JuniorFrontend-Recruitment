import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import ErrorCard from "../../components/Cards/ErrorCard";
import InfoCard from "../../components/Cards/InfoCard";
import ListCard from "../../components/Cards/ListCard";
import H1Heading from "../../components/Headings/H1Heading";
import useFetchData from "../../hooks/useFetchData";

const SpeciesDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data, isError, error } = useFetchData<Species>({
    url: `https://swapi.dev/api/species`,
    id,
  });

  if (isLoading) return <Loading />;

  if (isError) return <ErrorCard message={error?.message} />;

  if (data)
    return (
      <div className="max-w-4xl mx-auto backdrop-blur-lg bg-gray-900/80 text-white p-8 rounded-xl shadow-2xl w-full">
        <H1Heading className="mb-8 text-center">{data.name}</H1Heading>
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
      </div>
    );
};

export default SpeciesDetail;