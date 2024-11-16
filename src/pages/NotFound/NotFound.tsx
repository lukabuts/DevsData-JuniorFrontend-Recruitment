import BackButton from "../../components/BackButton/BackButton";
import H1Heading from "../../components/Headings/H1Heading";

const NotFound = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center flex-col sm:p-10 p-5 space-y-5">
      <H1Heading className="text-center">
        This page has gone to the dark side... it’s no longer here.
      </H1Heading>
      <BackButton>
        <span className="text-xl">Go Back</span>
      </BackButton>
    </div>
  );
};

export default NotFound;
