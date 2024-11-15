const InfoCard = ({ label, value }: InfoCardProps) => (
  <div className="p-4 bg-gray-800 rounded-md shadow-md">
    <h2 className="text-sm text-gray-400">{label}:</h2>
    <p className="text-lg font-medium">{value}</p>
  </div>
);

export default InfoCard;
