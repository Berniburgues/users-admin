import { useState } from 'react';
import { getUserById } from '../services';

function UserSearch() {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const userData = await getUserById(userId);
    setUser(userData);
  };

  return (
    <article className="mx-auto max-w-sm p-6 border rounded-lg shadow-lg mb-5">
      <form onSubmit={handleSearch} className="flex items-center mb-2">
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="py-2 px-3 border rounded-l-md w-full"
          placeholder="Search user by ID"
        />
        <button
          type="submit"
          className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-4 rounded-r-md"
        >
          Search
        </button>
      </form>
      {user?.id && (
        <div>
          <h2 className="text-xl font-bold mb-2">
            {user?.first_name} {user?.last_name}
          </h2>
          <p className="text-gray-700 mb-2">Email: {user?.email}</p>
          <p className="text-gray-700 mb-2">Birthday: {user?.birthday}</p>
        </div>
      )}
    </article>
  );
}

export default UserSearch;
