//import './App.css'
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import NotFoundPage from "./pages/NotFoundPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog" element={<Blog />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
