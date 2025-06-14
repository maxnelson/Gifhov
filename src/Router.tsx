import { Route, Routes } from "react-router-dom";
import { Homepage } from "@/components/pages/Homepage";
import { GifhovPage } from "@/components/pages/GifhovPage";
import { EmbedPage } from "@/components/pages/EmbedPage";
import { BrowsePage } from "@/components/pages/BrowsePage";
import { useState } from "react";
export function Router() {
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  document.onmousedown = () => {
    setAudioEnabled(true);
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Homepage audioEnabled={audioEnabled} />}
        ></Route>
        <Route
          path="/user/:ownerID/gifhov/:gifhovID"
          element={<GifhovPage audioEnabled={audioEnabled} />}
        ></Route>
        <Route
          path="/user/:ownerID/embed/:gifhovID"
          element={<EmbedPage audioEnabled={audioEnabled} />}
        ></Route>
        <Route
          path="/browse"
          element={<BrowsePage audioEnabled={audioEnabled} />}
        ></Route>
      </Routes>
    </>
  );
}
