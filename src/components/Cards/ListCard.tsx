import { Link } from "react-router-dom";

const ListCard = ({ items, type }: ListCardProps) => (
  <div>
    <h2 className="sm:text-2xl text-xl font-semibold mb-4 capitalize">
      {type}:
    </h2>
    {items.length > 0 ? (
      <ul className="flex gap-5 flex-wrap ">
        {items.map((itemUrl) => (
          <li key={itemUrl} className="text-blue-400 w-fit">
            <Link
              to={`/${type}/${itemUrl.split("/")[5]}`}
              className="capitalize hover:bg-gray-600 transition-colors px-4 py-2 bg-gray-800 rounded-md shadow-md"
            >
              Id: {itemUrl.split("/")[5]}
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-400">No {type} avaliable</p>
    )}
  </div>
);

export default ListCard;
