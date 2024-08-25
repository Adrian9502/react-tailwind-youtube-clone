// Pages.jsx
import { Route, Routes } from "react-router-dom";
import ViewVideo from "./ViewVideo";
import Searched from "./Searched";
export default function Pages() {
  return (
    <Routes>
      <Route path="/view-video/:id" element={<ViewVideo />} />
      <Route path="/searched/:query" element={<Searched />} />
    </Routes>
  );
}
