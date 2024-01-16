import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ToothFilling from "./pages/ToothFilling";
import RootCanal from "./pages/RootCanal";
import TeethWhite from "./pages/TeethWhite";
import ToothExtraction from "./pages/ToothExtraction";
import DentalBraces from "./pages/DentalBraces";
import DentalImplant from "./pages/DentalImplant";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/toothFilling" element={<ToothFilling />} />
        <Route path="/rootCanal" element={<RootCanal />} />
        <Route path="/teethWhitening" element={<TeethWhite />} />
        <Route path="/toothExtraction" element={<ToothExtraction />} />
        <Route path="/dentalBraces" element={<DentalBraces />} />
        <Route path="/dentalImplant" element={<DentalImplant />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
