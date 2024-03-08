import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import SignUpPage from "./components/signup/SignUpPage";
import SignInPage from "./components/signin/SignInPage";

const PostPage = lazy(() => import("./components/posts/PostPage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route
            path="/posts"
            element={
              <Suspense fallback={"Loading . . . . . . . "}>
                <PostPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;