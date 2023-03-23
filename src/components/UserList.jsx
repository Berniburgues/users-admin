import UserCard from './UserCard';

const UserList = ({ users, onDeleteUser, onEditUser }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-10 sm:mx-5 md:mx-8 lg:mx-10">
      {users.map((user) => (
        <UserCard
          user={user}
          key={user.id}
          onDeleteUser={onDeleteUser}
          onEditUser={onEditUser}
        />
      ))}
    </section>
  );
};
export default UserList;
