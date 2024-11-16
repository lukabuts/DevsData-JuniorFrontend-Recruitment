import { useQuery } from "react-query";
import axios from "axios";

const useFetchData = <T>({ url, id, filters }: useFetchDataProps) => {
  const fetchData = async () => {
    let apiUrl = "";
    if (id) {
      apiUrl = `${url}/${id}`;
    } else if (filters) {
      apiUrl = `${url}?search=${filters.search.trim()}&page=${filters.page}`;
    }

    const response = await axios.get(apiUrl);
    return response.data;
  };

  return useQuery<T, FetchError>(
    [url, id, filters?.page, filters?.search],
    fetchData,
    {
      retry: 1,
    }
  );
};

export default useFetchData;
