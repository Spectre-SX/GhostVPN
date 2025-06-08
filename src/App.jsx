import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home.jsx";
import NotFound from "./404/404.jsx"; // your 404 page component file

export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/404" element={<NotFound />} />

      {/* Redirect root to home */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* Catch all unmatched routes and show 404 */}
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
