import SadFaceIcon from "../../assets/icons/SadFaceIcon";
import BackButton from "../BackButton/BackButton";

const NoDataFoundCard = ({ search, text }: NoDataFoundCardProps) => {
  return (
    <div>
      <div className="text-center text-xl flex items-center justify-center gap-2">
        <span>
          {text}: <strong className="italic underline">{search}</strong>
        </span>
        <SadFaceIcon className="fill-white size-7" />
      </div>
      <BackButton>Go Back</BackButton>
    </div>
  );
};

export default NoDataFoundCard;
