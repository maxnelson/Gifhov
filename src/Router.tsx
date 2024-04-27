import { Route, Routes } from "react-router-dom";
import { Homepage } from "@/components/pages/Homepage";
import { GifhovPage } from "@/components/pages/GifhovPage";
export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/user/:ownerID/gifhov/:gifhovID"
          element={<GifhovPage />}
        ></Route>
      </Routes>
    </>
  );
}
