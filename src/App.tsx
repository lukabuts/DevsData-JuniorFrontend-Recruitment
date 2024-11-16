import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading/Loading";
const Home = lazy(() => import("./pages/Home/Home"));
const People = lazy(() => import("./pages/People/People"));
const PersonDetail = lazy(() => import("./pages/PersonDetail/PersonDetail"));

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="flex justify-center bg-cover bg-center bg-starship text-white bg-fixed bg-no-repeat overflow-auto sm:p-10 p-5 min-h-lvh">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/people" element={<People />} />
              <Route path="/people/:id" element={<PersonDetail />} />
            </Routes>
          </Suspense>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
