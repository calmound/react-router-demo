import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const About = () => <div>About Page</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <h1>About Title</h1>
              <Outlet />
            </>
          }
        >
          <Route path="/a" element={<About />}></Route>
          <Route path="/b" element={<div>content</div>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
