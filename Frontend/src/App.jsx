import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import AllPosts from './components/Posts/AllPosts';
import Error from './components/Error/Error';
import ProtectedRoute from './components/Authentication/ProtectedRoute';
import OpenRoute from './components/Authentication/OpenRoute';
import Homepage from './components/Home/Homepage';
import { Suspense } from 'react';

function App() {
  return (
    <div className="w-screen min-h-screen bg-blueWhite text-slate-600 overflow-x-hidden">
      <BrowserRouter>
      <Routes>
        {/* Home path */}
      <Route path="/" element={<Homepage />} />

        <Route path="/login" element={<OpenRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        {/* Home path */}
        <Route path="/signup" element={<OpenRoute />}>
          <Route path='/signup' element={<Signup />} />
        </Route>
        {/* Home path */}
        <Route path="/posts" element={<ProtectedRoute />}>
          <Route path='/posts' element={
              <Suspense fallback={"Loading . . . . . . . "}>
                <AllPosts />
              </Suspense>
            } />
        </Route>

        {/* All Paths */}
        <Route path='*' element={<Error />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
