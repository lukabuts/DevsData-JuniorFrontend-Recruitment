import BackButton from "../BackButton/BackButton";
import ErrorCard from "../Cards/ErrorCard";
import H1Heading from "../Headings/H1Heading";
import Loading from "../Loading/Loading";
import PageHelmet from "../PageHelmet/PageHelmet";

const DetailPageWrapper = ({
  children,
  title,
  description,
  isLoading,
  isError,
  error,
}: DetailPageWrapperProps) => {
  if (isLoading) return <Loading />;

  if (isError) return <ErrorCard message={error?.message} />;

  return (
    <div className="max-w-4xl mx-auto backdrop-blur-lg bg-gray-900/80 text-white p-8 rounded-xl shadow-2xl w-full mt-16">
      <PageHelmet title={title} description={description} />
      <H1Heading className="mb-8 text-center">{title}</H1Heading>
      {children}
      <BackButton>Go Back</BackButton>
    </div>
  );
};

export default DetailPageWrapper;
