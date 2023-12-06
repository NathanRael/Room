
// import Home from "../pages/Home";
// import Movies from "../pages/Movies";
// import WatchLists from "../pages/WatchLists";
// import WatchMovie from "../pages/WatchMovie";

import { createContext, useState, useEffect } from "react";
import { loadMovie, saveMovie } from "../functions/saveInfo";
import Load from "../components/Load";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
  

  return (
    <DataContext.Provider value={{
      
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;