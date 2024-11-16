import PageHelmet from "../PageHelmet/PageHelmet";

const DetailPageWrapper = ({
  children,
  title,
  description,
}: DetailPageWrapperProps) => {
  return (
    <div className="max-w-4xl mx-auto backdrop-blur-lg bg-gray-900/80 text-white p-8 rounded-xl shadow-2xl w-full mt-16">
      <PageHelmet title={title} description={description} />
      {children}
    </div>
  );
};

export default DetailPageWrapper;
