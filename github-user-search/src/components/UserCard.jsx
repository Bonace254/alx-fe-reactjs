export default function UserCard({ user }) {
  return (
    <div style={{ padding: '0.75rem', border: '1px solid #eee', borderRadius: 8, background: '#fff' }}>
      <img src={user.avatar_url} alt={user.login} style={{ width: 64, height: 64, borderRadius: 8 }} />
      <h3 style={{ margin: '0.5rem 0 0.25rem 0' }}>{user.login}</h3>
      <p style={{ margin: 0 }}>
        <a href={user.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
      </p>
    </div>
  );
}
