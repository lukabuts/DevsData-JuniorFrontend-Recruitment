import { Link } from "react-router-dom";

const ListCard = ({ items, type }: ListCardProps) => (
  console.log("ListCardProps: ", items),
  (
    <div>
      <h2 className="text-2xl font-semibold mb-4 capitalize">{type}:</h2>
      {items.length > 0 ? (
        <ol className="space-y-2">
          {items.map((itemUrl) => (
            <li
              key={itemUrl}
              className="text-blue-400 hover:underline list-decimal ml-4 w-fit"
            >
              <Link
                to={`/${type}/${itemUrl.split("/")[5]}`}
                className="capitalize"
              >
                {`${type.slice(0, -1)} ${itemUrl.split("/")[5]}`}
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <p className="text-gray-400">No {type} avaliable</p>
      )}
    </div>
  )
);

export default ListCard;
