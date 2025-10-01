import { BrowserRouter, Route, Routes } from 'react-router';
import { MainPage } from '@/pages/MainPage/MainPage';
import { About } from '@/pages/About';
import { Shop } from '@/pages/Shop';
import { Suspense } from 'react';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/shop"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Shop />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
