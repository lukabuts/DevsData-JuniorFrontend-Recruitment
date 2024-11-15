import { Link } from "react-router-dom";

const ListCard = ({ title, items, type, fallback }: ListCardProps) => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">{title}:</h2>
    {items.length > 0 ? (
      <ol className="space-y-2">
        {items.map((itemUrl) => (
          <li
            key={itemUrl}
            className="text-blue-400 hover:underline list-decimal ml-4 w-fit"
          >
            <Link to={`/${type}/${itemUrl.split("/")[5]}`}>
              {`${title.slice(0, -1)} ${itemUrl.split("/")[5]}`}
            </Link>
          </li>
        ))}
      </ol>
    ) : (
      <p className="text-gray-400">{fallback}</p>
    )}
  </div>
);

export default ListCard;
