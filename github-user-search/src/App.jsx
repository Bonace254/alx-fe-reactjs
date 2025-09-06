import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import SearchPage from './components/SearchPage.jsx';

export default function App() {
  return (
    <div>
      <header style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
        <h1>GitHub User Search</h1>
        <nav style={{ marginTop: '0.5rem' }}>
          <Link to="/">Home</Link> | <Link to="/search">Search</Link>
        </nav>
      </header>

      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>
    </div>
  );
}
