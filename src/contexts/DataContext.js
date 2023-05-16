import { createContext, useEffect, useState } from "react";
import { videoServices } from "services/video-services";
import { categoryServices } from "services/category-services";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [dataVideos, setDataVideos] = useState([]);
    const [dataCategories, setDataCategories] = useState([]);

    useEffect( () => {
      const loadVideos = async () => {
        try {
          const response = await videoServices.listVideos();
          const data = response.data
          setDataVideos(data);
        }
        catch(error) {
          console.log(error);
        }
      };
      loadVideos();
    },[] );

    useEffect( () => {
      const loadCategories = async () => {
        try {
          const response = await categoryServices.listCategories();
          const data = response.data
          setDataCategories(data);
        }
        catch(error) {
          console.log(error);
        }
      };
      loadCategories();
    },[] );

    return (
        <DataContext.Provider value={{ dataVideos, setDataVideos, dataCategories, setDataCategories }}>
            { children }
        </DataContext.Provider>
    );
};

export default DataContext;