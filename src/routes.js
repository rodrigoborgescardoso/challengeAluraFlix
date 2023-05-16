import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "components/Header";
import { DataProvider } from "contexts/DataContext";
import Home from "pages/Home";
import AddVideo from "pages/AddVideo";
import AddCategory from "pages/AddCategory";
import Footer from "components/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addvideo" element={<AddVideo />} />
          <Route path="/addcategory" element={<AddCategory />} />
        </Routes>
      </DataProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
