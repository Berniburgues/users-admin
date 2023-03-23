const UserCard = (props) => {
  const { user, onDeleteUser, onEditUser } = props;
  return (
    <article className="shadow-lg rounded-3xl w-60 sm:w-72 mx-1 mb-8">
      <div className=" bg-slate-200 rounded-t-2xl p-4">
        <h2 className="text-center font-bold text-xl mb-3 font-mono">
          {user.first_name} {user.last_name}
        </h2>
        <ul className="text-sm">
          <li className="mb-2">
            <span className="font-semibold text-blue-600 text-base">EMAIL </span>
            <br />
            <p className="text-base">{user.email}</p>
          </li>
          <li>
            <span className="font-semibold text-blue-600 text-base">BIRTHDAY </span>
            <br />
            <p className="text-base">{user.birthday}</p>
          </li>
        </ul>
      </div>
      <div className="bg-gray-100 rounded-b-2xl px-4 py-2 flex justify-end">
        <button
          className="bg-red-500 hover:bg-red-600 border border-red-700 text-white py-1 px-3 rounded-full mr-2"
          onClick={() => {
            if (window.confirm('Are you sure you want to delete this user?')) {
              onDeleteUser(user.id);
            }
          }}
        >
          <i className="fa-solid fa-trash text-xs"></i>
        </button>
        <button
          className="bg-amber-400 hover:bg-amber-500 border border-amber-600 text-white py-1 px-3 rounded-full"
          onClick={() => onEditUser(user)}
        >
          <i className="fa-solid fa-pen-to-square text-sm text-white"></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
