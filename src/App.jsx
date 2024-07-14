import { useEffect, useState } from "react";
import { About, Home, Loading, Navbar, TypeWriter } from "./pages";
import loading from "./svg/loading.json";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(true);
      }, 2500);
    };
    fakeDataFetch();
  });
  return (
    <>
      {" "}
      {isloading ? (
        <>
          {/* <Navbar /> */}
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
          {/* <Footer /> */}
        </>
      ) : (
        <>
          <div
            className="bg-[#18181b] w-full h-[100vh] z-10 fixed left-0 top-0 flex flex-col justify-center items-center
                                "
          >
            <Loading src={loading} autoplay loop controls />
            <p className="mt-1 text-white">
              <TypeWriter string={"Loading....."} typeSpeed={30} />
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default App;
