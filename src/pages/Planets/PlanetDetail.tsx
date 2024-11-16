import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import useFetchPaginatedData from "../../hooks/useFetchData";
import InfoCard from "../../components/Cards/InfoCard";
import ListCard from "../../components/Cards/ListCard";
import ErrorCard from "../../components/Cards/ErrorCard";
import H1Heading from "../../components/Headings/H1Heading";
import DetailPageWrapper from "../../components/Wrappers/DetailPageWrapper";
import BackButton from "../../components/BackButton/BackButton";

const PlanetDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data, isError, error } = useFetchPaginatedData<Planet>({
    url: "https://swapi.dev/api/planets",
    id,
  });

  if (isLoading) return <Loading />;

  if (isError) return <ErrorCard message={error?.message} />;

  if (data)
    return (
      <DetailPageWrapper>
        <H1Heading className="mb-8 text-center">{data.name}</H1Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InfoCard label="Climate" value={data.climate} />
          <InfoCard label="Diameter" value={data.diameter} />
          <InfoCard label="Gravity" value={data.gravity} />
          <InfoCard label="Orbital Period" value={data.orbital_period} />
          <InfoCard label="Population" value={data.population} />
          <InfoCard label="Rotation Period" value={data.rotation_period} />
          <InfoCard label="Surface Water" value={data.surface_water} />
          <InfoCard label="Terrain" value={data.terrain} />
        </div>

        <div className="mt-10 space-y-8">
          <ListCard items={data.residents} type="people" />
          <ListCard items={data.films} type="films" />
        </div>
        <BackButton>Go Back</BackButton>
      </DetailPageWrapper>
    );
};

export default PlanetDetail;
