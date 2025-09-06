import axios from 'axios';

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
const api = axios.create({
  baseURL: 'https://api.github.com',
});

if (token) {
  api.defaults.headers.common['Authorization'] = `token ${token}`;
}

export async function searchUsers(q) {
  if (!q) return [];
  const res = await api.get('/search/users', { params: { q } });
  return res.data.items || [];
}
