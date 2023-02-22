import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("jwt_token");
    if (!token) {
      navigate("/login");
      console.log("if");
    } else {
      console.log("else");
      axios
        .get("http://localhost:5000/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.data?.response?.status === 401) {
            navigate("/login");
          }
        })
        .catch((err) => err);
    }
  }, [navigate]);

  return (
    <div className="absolute top-0 w-full h-screen flex items-center justify-center bg-violet-100">
      <div className="  text-6xl font-thin text-gray-400">
        Sistem Za Upravljanje Zalihama
      </div>
    </div>
  );
};

export default Home;
