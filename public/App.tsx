import { Route, Routes } from "react-router-dom";
import Details from "@/pages/details";
import Main from "@/pages/home";
import Nikkah from "@/pages/nikkah";
import DevContact from "@/components/dev";

const App = () => {

  return <div className="w-full h-screen flex flex-col ">
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/details" element={<Details />} />
      <Route path="/nikkah" element={<Nikkah />} />
    </Routes>
    <DevContact />
  </div>;
};

export default App;