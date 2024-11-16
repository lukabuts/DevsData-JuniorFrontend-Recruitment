const DetailPageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="max-w-4xl mx-auto backdrop-blur-lg bg-gray-900/80 text-white p-8 rounded-xl shadow-2xl w-full mt-16">
      {children}
    </div>
  );
};

export default DetailPageWrapper;
