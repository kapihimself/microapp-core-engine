import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Builder from './pages/Builder';
import PublishedSite from './pages/PublishedSite';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/build" element={<Builder />} />
          <Route path="/site/:id" element={<PublishedSite />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}