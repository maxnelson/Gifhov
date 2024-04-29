import { Route, Routes } from "react-router-dom";
import { Homepage } from "@/components/pages/Homepage";
import { GifhovPage } from "@/components/pages/GifhovPage";
import { EmbedPage } from "@/components/pages/EmbedPage";
export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/user/:ownerID/gifhov/:gifhovID"
          element={<GifhovPage />}
        ></Route>
        <Route
          path="/user/:ownerID/embed/:gifhovID"
          element={<EmbedPage />}
        ></Route>
      </Routes>
    </>
  );
}
