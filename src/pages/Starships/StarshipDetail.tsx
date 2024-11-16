import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import useFetchPaginatedData from "../../hooks/useFetchData";
import InfoCard from "../../components/Cards/InfoCard";
import ListCard from "../../components/Cards/ListCard";
import ErrorCard from "../../components/Cards/ErrorCard";
import H1Heading from "../../components/Headings/H1Heading";
import DetailPageWrapper from "../../components/Wrappers/DetailPageWrapper";
import BackButton from "../../components/BackButton/BackButton";

const StarshipDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data, isError, error } = useFetchPaginatedData<Starship>({
    url: "https://swapi.dev/api/starships",
    id,
  });

  if (isLoading) return <Loading />;

  if (isError) return <ErrorCard message={error?.message} />;

  if (data)
    return (
      <DetailPageWrapper>
        <H1Heading className="mb-8 text-center">{data.name}</H1Heading>
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
        <BackButton>Go Back</BackButton>
      </DetailPageWrapper>
    );
};

export default StarshipDetail;
