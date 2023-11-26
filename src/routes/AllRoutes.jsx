import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { CreatePost } from "../components/CreatePost";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createpost" element={<CreatePost />} />
    </Routes>
  );
};
