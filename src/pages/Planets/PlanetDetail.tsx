import { useParams } from "react-router-dom";
import useFetchPaginatedData from "../../hooks/useFetchData";
import InfoCard from "../../components/Cards/InfoCard";
import ListCard from "../../components/Cards/ListCard";
import DetailPageWrapper from "../../components/Wrappers/DetailPageWrapper";

const PlanetDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data, isError, error } = useFetchPaginatedData<Planet>({
    url: "https://swapi.dev/api/planets",
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
          <InfoCard label="Climate" value={data.climate} />
          <InfoCard
            label="Diameter"
            value={Number(data.diameter).toLocaleString()}
          />
          <InfoCard label="Gravity" value={data.gravity} />
          <InfoCard label="Orbital Period" value={data.orbital_period} />
          <InfoCard
            label="Population"
            value={Number(data.population).toLocaleString()}
          />
          <InfoCard label="Rotation Period" value={data.rotation_period} />
          <InfoCard label="Surface Water" value={data.surface_water} />
          <InfoCard label="Terrain" value={data.terrain} />
        </div>

        <div className="mt-10 space-y-8">
          <ListCard items={data.residents} type="people" />
          <ListCard items={data.films} type="films" />
        </div>
      </DetailPageWrapper>
    );
};

export default PlanetDetail;
