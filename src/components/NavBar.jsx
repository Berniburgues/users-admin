import React from 'react';

const NavBar = ({ actionAddBtn }) => {
  return (
    <nav className="w-full flex flex-row items-center justify-between px-6 py-3 bg-gray-100 shadow mb-10">
      <h1 className="text-2xl font-bold font-mono">Users Admin</h1>
      <button
        onClick={actionAddBtn}
        className="flex items-center justify-center bg-green-500 text-white rounded-lg py-1 px-1 hover:bg-green-600"
      >
        <i className="fa-solid fa-plus text-lg mr-1"></i>
        <span>Add New User</span>
      </button>
    </nav>
  );
};

export default NavBar;
