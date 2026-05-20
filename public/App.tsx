import { Route, Routes } from "react-router-dom";
import Details from "@/pages/details";
import Main from "@/pages/home";


const App = () => {

  return <div className="w-full h-screen flex flex-col ">
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </div>;
};

export default App;