import { useState } from 'react';
import { getUserById } from '../services';

function UserSearch() {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [userSuggestions, setUserSuggestions] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const userData = await getUserById(userId);
    setUser(userData);
  };

  const handleInputChange = async (e) => {
    const inputVal = e.target.value.trim();
    setUserId(inputVal);

    if (inputVal === '') {
      setUserSuggestions([]);
      return;
    }

    const userData = await getUserById(inputVal);

    if (userData) {
      setUserSuggestions([
        { id: userData.id, name: `${userData.first_name} ${userData.last_name}` },
      ]);
    } else {
      setUserSuggestions([{ id: 'no-matches', name: 'No matches' }]);
    }
  };

  const handleSuggestionClick = async (id) => {
    const userData = await getUserById(id);
    setUser(userData);
    setUserId('');
    setUserSuggestions([]);
  };

  const handleClear = () => {
    setUser(null);
    setUserSuggestions([]);
    setUserId('');
  };

  return (
    <article className="mx-auto max-w-sm p-6 border rounded-lg shadow-lg mb-5">
      <form onSubmit={handleSearch} className="flex items-center mb-2">
        <input
          type="text"
          value={userId}
          onChange={handleInputChange}
          className="py-2 px-3 border rounded-l-md w-full"
          placeholder="Search user by ID"
        />
      </form>
      {userSuggestions.map((suggestion) => (
        <button
          key={suggestion.id}
          onClick={() => handleSuggestionClick(suggestion.id)}
          className="block text-center  w-full py-2 px-3 hover:bg-gray-300 bg-gray-200 focus:outline-none font-bold"
        >
          {suggestion.name}
        </button>
      ))}
      {user?.id && (
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-2 text-center">
            {user?.first_name} {user?.last_name}
          </h2>
          <p className="text-gray-700 mb-2">Email: {user?.email}</p>
          <p className="text-gray-700 mb-2">Birthday: {user?.birthday}</p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md text-center"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      )}
    </article>
  );
}

export default UserSearch;
