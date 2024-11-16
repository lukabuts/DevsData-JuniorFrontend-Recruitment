import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import useFetchPaginatedData from "../../hooks/useFetchData";
import InfoCard from "../../components/Cards/InfoCard";
import ListCard from "../../components/Cards/ListCard";
import ErrorCard from "../../components/Cards/ErrorCard";
import H1Heading from "../../components/Headings/H1Heading";

const FilmDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data, isError, error } = useFetchPaginatedData<Film>({
    url: "https://swapi.dev/api/films",
    id,
  });

  if (isLoading) return <Loading />;

  if (isError) return <ErrorCard message={error?.message} />;

  if (data)
    return (
      <div className="max-w-4xl mx-auto backdrop-blur-lg bg-gray-900/80 text-white p-8 rounded-xl shadow-2xl w-full">
        <H1Heading className="mb-8 text-center">{data.title}</H1Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InfoCard label="Episode ID" value={data.episode_id} />
          <InfoCard label="Director" value={data.director} />
          <InfoCard label="Producer" value={data.producer} />
          <InfoCard label="Release Date" value={data.release_date} />
        </div>

        <div className="mt-10">
          <InfoCard label="Opening Crawl" value={data.opening_crawl} />
        </div>

        <div className="mt-10 space-y-8">
          <ListCard items={data.characters} type="people" />
          <ListCard items={data.planets} type="planets" />
          <ListCard items={data.starships} type="starships" />
          <ListCard items={data.vehicles} type="vehicles" />
          <ListCard items={data.species} type="species" />
        </div>
      </div>
    );
};

export default FilmDetail;
