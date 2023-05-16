import React, { useContext } from "react";
import DataContext from "contexts/DataContext";
import Banner from "components/Banner";
import MainContentContainer from "components/MainContentContainer";
import Category from "components/Category";

const Home = () => {

    const { dataVideos, dataCategories } = useContext(DataContext);

    return (
        <>
            <Banner />

            <MainContentContainer>
                {dataCategories.map(category =>
                    <Category
                        key={category.id}
                        data={dataVideos.filter(video => video.attributes.category === category.attributes.title)}
                        title={category.attributes.title}
                        description={category.attributes.description}
                        color={category.attributes.color}
                    />
                )}
            </MainContentContainer>
        </>
    );
};

export default Home;