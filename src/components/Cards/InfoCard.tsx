const InfoCard = ({ label, value }: InfoCardProps) => (
  <div className="p-4 bg-gray-800 rounded-md shadow-md">
    <h2 className="text-sm text-gray-400">{label}:</h2>
    <p className="sm:text-lg text-md font-medium">{value}</p>
  </div>
);

export default InfoCard;
