import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AllNewsPage } from './pages';
import { Navigation } from './component';

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<AllNewsPage />} />
          {/* <Route path="/news/:newsId" element={<NewsDetailsPage />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
