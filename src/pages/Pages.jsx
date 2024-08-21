// Pages.jsx
import { Route, Routes } from "react-router-dom";
import ViewVideo from "./ViewVideo";
export default function Pages() {
  return (
    <Routes>
      <Route path="/view-video/:id" element={<ViewVideo />} />
    </Routes>
  );
}
