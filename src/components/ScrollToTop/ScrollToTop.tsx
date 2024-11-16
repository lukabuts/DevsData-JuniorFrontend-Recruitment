import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const searchParams = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, searchParams]);

  return null;
};

export default ScrollToTop;
