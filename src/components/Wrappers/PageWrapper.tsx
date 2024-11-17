import DataCountCard from "../Cards/DataCountCard";
import ErrorCard from "../Cards/ErrorCard";
import NoDataFoundCard from "../Cards/NoDataFoundCard";
import SearchCard from "../Cards/SearchCard";
import SearchedWordCard from "../Cards/SearchedWordCard";
import H1Heading from "../Headings/H1Heading";
import Loading from "../Loading/Loading";
import PageHelmet from "../PageHelmet/PageHelmet";
import PaginationButtons from "../PaginationButtons/PaginationButtons";
import DataGridWrapper from "./DataGridWrapper";

const PageWrapper = ({
  children,
  title,
  handleSearch,
  searchTerm,
  setSearchTerm,
  navigate,
  data,
  filters,
  handlePageChange,
  isLoading,
  isError,
  error,
}: PageWrapperProps) => {
  return (
    <div className="max-w-6xl mx-auto w-full mt-16">
      <PageHelmet title={`Galaxy Chronicles | ${title}`} />
      <H1Heading className="text-center mb-6">Star Wars {title}</H1Heading>
      <SearchCard
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeholder={`Search for a ${title
          .toLocaleLowerCase()
          .slice(0, -1)}...`}
      />
      {filters.search && filters.search.length > 0 && (
        <SearchedWordCard navigate={navigate} search={filters.search} />
      )}
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorCard message={error?.message} />
      ) : data && data.count > 0 ? (
        <>
          <DataGridWrapper>{children}</DataGridWrapper>
          <DataCountCard count={data.count} type={title.slice(0, -1)} />
          <PaginationButtons
            page={filters.page}
            setPage={handlePageChange}
            pageLength={Math.ceil(data.count / 10)}
          />
        </>
      ) : (
        data?.count === 0 && (
          <NoDataFoundCard
            search={filters.search}
            text="No Films Found With Title"
          />
        )
      )}
    </div>
  );
};

export default PageWrapper;
