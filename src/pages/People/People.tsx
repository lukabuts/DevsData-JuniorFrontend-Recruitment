import { Link, useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import PaginationButtons from "../../components/PaginationButtons/PaginationButtons";
import useFetchData from "../../hooks/useFetchData";
import { useEffect, useState } from "react";
import ErrorCard from "../../components/Cards/ErrorCard";
import ExitIcon from "../../assets/icons/ExitIcon";
import H1Heading from "../../components/Headings/H1Heading";

const People = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    search: searchParams.get("search") || "",
    page: Number(searchParams.get("page")) || 1,
  });

  // Updating filters when searchParams change
  useEffect(() => {
    setFilters({
      search: searchParams.get("search") || "",
      page: Number(searchParams.get("page")) || 1,
    });
    setSearchTerm(searchParams.get("search") || "");
  }, [searchParams]);

  // State to manage controlled input for search term
  const [searchTerm, setSearchTerm] = useState(filters.search);

  // Fetching data
  const { isLoading, data, isError, error } = useFetchData<PeopleResponse>({
    url: "https://swapi.dev/api/people",
    filters,
  });

  // Handle search
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newFilters = { search: searchTerm.trim(), page: 1 };
    navigate(newFilters);
  };

  // Handle page change
  const handlePageChange = (newPage: number) => {
    const newFilters = { ...filters, page: newPage };
    navigate(newFilters);
  };

  // Function to navigate
  function navigate(filters: { search: string; page: number }) {
    setSearchParams(() => {
      const params: Record<string, string> = {};
      if (filters.search.trim().length > 0) {
        params.search = filters.search;
      }
      if (filters.page > 1) {
        params.page = filters.page.toString();
      }
      return params;
    });
  }

  return (
    <div className="max-w-6xl mx-auto w-full">
      <H1Heading className="text-center mb-6">Star Wars Characters</H1Heading>
      <form onSubmit={handleSearch} className="mb-6 flex justify-center">
        <input
          type="search"
          placeholder="Search by name..."
          value={searchTerm}
          className="p-2 w-full max-w-80 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className={`ml-2 p-2 rounded-md transition ${
            searchTerm.trim().length === 0
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          disabled={searchTerm.trim().length === 0}
        >
          Search
        </button>
      </form>
      {filters.search.length > 0 && (
        <div className="bg-gray-800 rounded-xl px-4 py-2 shadow-lg w-fit flex items-center gap-2 mb-6">
          <span className="text-md">{filters.search}</span>
          <button
            onClick={() => {
              navigate({ search: "", page: 1 });
            }}
          >
            <ExitIcon className="w-3 h-3 fill-white" />
          </button>
        </div>
      )}
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorCard message={error?.message} />
      ) : data && data.count > 0 ? (
        <>
          <div className="grid grid-cols-data-card justify-around gap-6">
            {data.results.map((person) => (
              <Link
                to={`/people/${person.url.split("/")[5]}`}
                key={person.name}
                className="block p-4 rounded-lg border border-gray-700 hover:bg-gray-800 transition duration-200 backdrop-blur-lg"
              >
                <h2 className="text-lg font-semibold text-white">
                  {person.name}
                </h2>
                <p className="text-gray-400">
                  <strong>Birth Year:</strong> {person.birth_year}
                </p>
                <p className="text-gray-400">
                  <strong>Gender:</strong> {person.gender}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-right mt-3">
            <p className="text-gray-400">
              Found <strong className="underline">{data.count}</strong>{" "}
              character
              {data.count > 1 ? "s" : ""}
            </p>
          </div>
          <PaginationButtons
            page={filters.page}
            setPage={handlePageChange}
            previous={data.previous}
            next={data.next}
          />
        </>
      ) : (
        data?.count === 0 && (
          <div className="text-center text-white  text-xl">
            <span>
              No Characters Found With Name:{" "}
              <strong className="italic underline">{filters.search}</strong>{" "}
              :&#40;&#40;
            </span>
          </div>
        )
      )}
    </div>
  );
};

export default People;
