import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.state);
    if (location.state === null) {
      navigate("/", { replace: true });
    } else {
    }
  }, []);

  return (
    <>
      <h2>{location.state?.score}</h2>
      <button>TRY AGAIN</button>
    </>
  );
};

export default Result;
