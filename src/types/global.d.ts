// General response structure
type GeneralResponse = {
  count: number;
  next: string | null;
  previous: string | null;
};

type StarWarsCategories = {
  name: string;
  image: string;
};

// Planet response structure extending GeneralResponse
type PlanetResponse = GeneralResponse & {
  results: Planet[]; // List of planets on the current page
};

// Planet resource structure
type Planet = {
  climate: string;
  diameter: string;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
  created: string;
  edited: string;
};

// People response structure extending GeneralResponse
type PeopleResponse = GeneralResponse & {
  results: Person[]; // List of people on the current page
};

// People resource structure
type Person = {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  name: string;
  url: string;
  created: string;
  edited: string;
};

// Film response structure extending GeneralResponse
type FilmResponse = GeneralResponse & {
  results: Film[]; // List of films on the current page
};

// Film resource structure
type Film = {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: string;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
};

// Starship response structure extending GeneralResponse
type StarshipResponse = GeneralResponse & {
  results: Starship[]; // List of starships on the current page
};

// Starship resource structure
type Starship = {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[];
  pilots: string[];
  starship_class: string;
  url: string;
};

type FetchError = {
  message: string;
  status: number;
  name: string;
  code: string;
  stack: string;
};

interface PaginationButtonsProps {
  previous: string | null;
  next: string | null;
  page: number;
  setPage: (newPage: number) => void;
}

// BackButtonProps interface
interface BackButtonProps {
  children: React.ReactNode;
}

// H1HeadingProps interface
interface H1HeadingProps {
  children: React.ReactNode;
  className?: string;
}

interface useFetchDataProps {
  url: string;
  id?: string;
  filters?: {
    page: number;
    search: string;
  };
}

// ListCardProps interface
interface ListCardProps {
  items: string[];
  type: string;
}

// InfoCardProps interface
interface InfoCardProps {
  label: string;
  value: string;
}

interface ErrorCardProps {
  message?: string;
}

// IconsProps interface
interface IconsProps {
  className?: string;
}

// DataFilter Type
type DataFilter = {
  search: string;
  page: number;
};

interface SearchedWordCardProps {
  navigate: (filters: DataFilter) => void;
  search: string;
}

interface SearchCardProps {
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

// DataItemWrapperProps interface
interface DataItemWrapperProps {
  to: string;
  children: React.ReactNode;
}

// DataGridWrapperProps interface
interface DataGridWrapperProps {
  children: React.ReactNode;
}

interface NoDataFoundCardProps {
  search: string;
  text: string;
}

interface DataCountCardProps {
  count: number;
  type: string;
}
