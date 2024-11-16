import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading/Loading";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/Header/Header";
import { HelmetProvider } from "react-helmet-async";

const Home = lazy(() => import("./pages/Home/Home"));
const People = lazy(() => import("./pages/People/People"));
const PersonDetail = lazy(() => import("./pages/People/PersonDetail"));
const Films = lazy(() => import("./pages/Films/Films"));
const FilmDetail = lazy(() => import("./pages/Films/FilmDetail"));
const Starships = lazy(() => import("./pages/Starships/Starships"));
const StarshipDetail = lazy(() => import("./pages/Starships/StarshipDetail"));
const Vehicles = lazy(() => import("./pages/Vehicles/Vehicles"));
const VehicleDetail = lazy(() => import("./pages/Vehicles/VehicleDetail"));
const Species = lazy(() => import("./pages/Species/Species"));
const SpeciesDetail = lazy(() => import("./pages/Species/SpeciesDetail"));
const Planets = lazy(() => import("./pages/Planets/Planets"));
const PlanetDetail = lazy(() => import("./pages/Planets/PlanetDetail"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="flex justify-center bg-cover bg-center bg-starship text-white bg-fixed bg-no-repeat overflow-auto sm:p-10 p-5 min-h-lvh">
      <QueryClientProvider client={queryClient}>
        <Router
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Header />
          <ScrollToTop />
          <Suspense fallback={<Loading />}>
            <HelmetProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/people" element={<People />} />
                <Route path="/people/:id" element={<PersonDetail />} />
                <Route path="/films" element={<Films />} />
                <Route path="/films/:id" element={<FilmDetail />} />
                <Route path="/starships" element={<Starships />} />
                <Route path="/starships/:id" element={<StarshipDetail />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/vehicles/:id" element={<VehicleDetail />} />
                <Route path="/species" element={<Species />} />
                <Route path="/species/:id" element={<SpeciesDetail />} />
                <Route path="/planets" element={<Planets />} />
                <Route path="/planets/:id" element={<PlanetDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </HelmetProvider>
          </Suspense>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
