import SearchCard from "../Cards/SearchCard";
import SearchedWordCard from "../Cards/SearchedWordCard";
import H1Heading from "../Headings/H1Heading";
import PageHelmet from "../PageHelmet/PageHelmet";

const PageWrapper = ({
  children,
  title,
  handleSearch,
  searchTerm,
  setSearchTerm,
  navigate,
  search,
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
      {search && search.length > 0 && (
        <SearchedWordCard navigate={navigate} search={search} />
      )}
      {children}
    </div>
  );
};

export default PageWrapper;
