import './App.css'
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import PokeChase from "./pages/PokeChase";
import ChatPage from "./pages/ChatPage";
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
        <Route index element={<HomePage />} />
        <Route path="/pokechase" element={<PokeChase />} />
        <Route path="/chatpage" element={<ChatPage />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
