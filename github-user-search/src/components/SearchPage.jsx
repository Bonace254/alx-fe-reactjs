import { useState } from 'react';
import { searchUsers } from '../services/githubService.js';
import UserCard from './UserCard.jsx';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(e) {
    e?.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const users = await searchUsers(query.trim());
      setResults(users);
    } catch (err) {
      setError('Failed to fetch users. Check console for details.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Search GitHub Users</h2>

      <form onSubmit={handleSearch} style={{ marginBottom: '1rem' }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter username (e.g. torvalds)"
          style={{ padding: '0.5rem', width: '60%', maxWidth: '320px' }}
        />
        <button type="submit" style={{ marginLeft: '0.5rem', padding: '0.5rem 1rem' }}>
          Search
        </button>
      </form>

      {loading && <p>Loading…</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && results.length === 0 && <p>No results yet.</p>}

      <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {results.map(user => <UserCard key={user.id} user={user} />)}
      </div>
    </div>
  );
}
