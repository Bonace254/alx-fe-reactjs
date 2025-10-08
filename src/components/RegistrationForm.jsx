import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    setError("");
    // Mock API simulation
    console.log("Form submitted:", { username, email, password });
    alert("Registration successful!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">User Registration (Controlled)</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block font-medium mb-1">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}          // ✅ controlled
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}             // ✅ controlled
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="password" className="block font-medium mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}          // ✅ controlled
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;