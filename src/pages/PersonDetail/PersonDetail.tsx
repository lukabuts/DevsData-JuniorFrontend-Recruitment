import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import Loading from "../../components/Loading/Loading";
import useFetchPaginatedData from "../../hooks/useFetchData";
import InfoCard from "../../components/Cards/InfoCard";
import ListCard from "../../components/Cards/ListCard";
import ErrorCard from "../../components/Cards/ErrorCard";

const PersonDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data, isError, error } = useFetchPaginatedData<Person>({
    url: "https://swapi.dev/api/people",
    id,
  });

  console.log(data);

  if (isLoading) return <Loading />;

  if (isError) return <ErrorCard message={error?.message} />;

  if (data)
    return (
      <div className="max-w-4xl mx-auto backdrop-blur-lg bg-gray-900/80 text-white p-8 rounded-xl shadow-2xl mt-10 w-full">
        <h1 className="text-4xl font-bold mb-8 text-center text-gradient">
          {data.name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard label="Birth Year" value={data.birth_year} />
          <InfoCard label="Gender" value={data.gender} />
          <InfoCard label="Height" value={`${data.height} cm`} />
          <InfoCard label="Mass" value={`${data.mass} kg`} />
          <InfoCard label="Hair Color" value={data.hair_color} />
          <InfoCard label="Eye Color" value={data.eye_color} />
          <InfoCard label="Skin Color" value={data.skin_color} />
        </div>

        <div className="mt-10 space-y-8">
          <ListCard title="Films" items={data.films} type="films" />
          <ListCard
            title="Starships"
            items={data.starships}
            type="starships"
            fallback="No starships available"
          />
          <ListCard
            title="Vehicles"
            items={data.vehicles}
            type="vehicles"
            fallback="No vehicles available"
          />
        </div>

        <div className="mt-10 text-center">
          <BackButton>Back to People List</BackButton>
        </div>
      </div>
    );
};

export default PersonDetail;
