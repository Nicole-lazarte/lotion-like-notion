import { BrowserRouter, Routes, Route } from "react-router-dom";
import lotionLayout from "./lotionLayout.js";
import preview from "./preview.js";
import editing from "./editing.js";
import emptyNote from "./emptyNote.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} exact>
          <Route path="/" element={<EmptyNote />} exact />
          <Route path="/preview/:id" element={<Preview />} />
          <Route path="/editing/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
