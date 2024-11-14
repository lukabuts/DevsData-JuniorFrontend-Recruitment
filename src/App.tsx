import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("./pages/Home/Home"));
const People = lazy(() => import("./pages/People/People"));

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="flex items-center justify-center bg-cover bg-center bg-starship text-white bg-fixed bg-no-repeat overflow-auto p-10 min-h-screen">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/people" element={<People />} />
            </Routes>
          </Suspense>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
