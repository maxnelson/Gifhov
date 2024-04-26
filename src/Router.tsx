import { Route, Routes } from "react-router-dom";
import { Homepage } from "@/components/pages/Homepage";
export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </>
  );
}
