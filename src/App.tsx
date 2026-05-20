import { Routes, Route } from 'react-router';
import { Landing } from '@/pages/Landing';
import { Notebook } from '@/pages/Notebook';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/app" element={<Notebook />} />
    </Routes>
  );
}

export default App;
