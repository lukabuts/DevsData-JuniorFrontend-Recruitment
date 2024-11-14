import axios from "axios";
import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";

const People = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = Number(queryParams.get("page")) || 1;

  const fetchData = async () => {
    const response = await axios.get(
      `https://swapi.dev/api/people/?page=${page}`
    );
    return response.data;
  };

  const { isLoading, data, isError, error } = useQuery<
    PeopleResponse,
    FetchError
  >(["people", page], () => fetchData(), {
    retry: 1,
  });

  return isLoading ? (
    <div>Loading...</div>
  ) : data ? (
    <div>
      {isError ? (
        <div>Error: {error.message}</div>
      ) : (
        data.results.map((person: Person, key: number) => (
          <div key={person.name}>
            {key + 1}. {person.name}
          </div>
        ))
      )}

      <div>
        {data.previous && (
          <Link replace to={`/people?page=${page - 1}`}>
            &lt; Previous Page
          </Link>
        )}
        <span> | </span>
        {data.next && (
          <Link replace to={`/people?page=${page + 1}`}>
            Next Page &gt;
          </Link>
        )}
      </div>
    </div>
  ) : (
    <div>Page Not Found</div>
  );
};

export default People;
