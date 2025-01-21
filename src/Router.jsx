import { BrowserRouter, Routes, Route } from "react-router";
import HomePageLayout from "./pages/Layouts/HomePageLayout";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePageLayout />}>
          <Route index element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="project" element={<Project />} />
          <Route path="experience" element={<Experience />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
