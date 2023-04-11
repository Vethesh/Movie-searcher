import React, { useContext, useEffect, useState } from "react";

const Appcontext = React.createContext();

const Api = "http://www.omdbapi.com/?apikey=b4ede53b";

const AppProvider = ({ children }) => {
  const [query, setquery] = useState("");
  const [isloading, setLoading] = useState(true);

  const [ismovie, setMovie] = useState([]);
  const [iserror, setError] = useState({ show: "false", msg: "" });
  const getMovies = async url => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setLoading(false);
        setMovie(data.Search);
      } else {
        setError({
          show: true,
          msg: data.Error,
        });
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerout = setTimeout(() => {
      getMovies(`${Api}&s=${query}`);
    }, 500);
    return () => clearTimeout(timerout);
  }, [query]);

  return (
    <Appcontext.Provider
      value={{ isloading, iserror, ismovie, query, setquery }}>
      {children}
    </Appcontext.Provider>
  );
};

const useGlobal = () => {
  return useContext(Appcontext);
};

export { Appcontext, AppProvider, useGlobal };

// context-warehouse
// provider-delivery boy
// consumer-users
