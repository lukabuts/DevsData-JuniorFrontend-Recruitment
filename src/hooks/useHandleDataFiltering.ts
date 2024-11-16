import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useHandleDataFiltering = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // State to manage filters
  const [filters, setFilters] = useState({
    search: searchParams.get("search") || "",
    page: Number(searchParams.get("page")) || 1,
  });
  // State to manage controlled input for search term
  const [searchTerm, setSearchTerm] = useState(filters.search);

  // Updating filters when searchParams change
  useEffect(() => {
    setFilters({
      search: searchParams.get("search") || "",
      page: Number(searchParams.get("page")) || 1,
    });
    setSearchTerm(searchParams.get("search") || "");
  }, [searchParams]);

  // Function to navigate
  function navigate(filters: DataFilter) {
    const params: Record<string, string> = {};
    if (filters.search.trim().length > 0) {
      params.search = filters.search;
    }
    if (filters.page > 1) {
      params.page = filters.page.toString();
    }
    setSearchParams(params);
  }

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
  return {
    navigate,
    handlePageChange,
    handleSearch,
    filters,
    searchTerm,
    setSearchTerm,
  };
};

export default useHandleDataFiltering;
