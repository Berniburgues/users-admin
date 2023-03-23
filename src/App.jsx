import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserList from './components/UserList';
import NavBar from './components/NavBar';
import Modal from './components/Modal';
import { useForm } from 'react-hook-form';
import NewUserForm from './components/NewUserForm';
import EditUserForm from './components/EditUserForm';
import { getUsers, createUser, updateUser, deleteUser } from './services';

function App() {
  const [users, setUsers] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const { reset } = useForm();

  const loadUsers = async () => {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (error) {
      console.error(error);
    }
  };

  const createUserHandler = async (data) => {
    try {
      await createUser(data);
      loadUsers();
      reset();
      setIsFormVisible(false);
      toast.success('User created successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const editUserHandler = async (updatedUser) => {
    try {
      await updateUser(selectedUser.id, updatedUser);
      loadUsers();
      setSelectedUser(null);
      setIsEditFormVisible(false);
      toast.warning('User updated successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUserHandler = async (id) => {
    try {
      await deleteUser(id);
      loadUsers();
      toast.error('User deleted successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    setIsFormVisible(true);
  };

  const closeFormHandler = () => {
    setIsFormVisible(false);
    setIsEditFormVisible(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <NavBar actionAddBtn={handleClick} />
      <UserList
        users={users}
        onEditUser={(user) => {
          setSelectedUser(user);
          setIsEditFormVisible(true);
        }}
        onDeleteUser={(id) => {
          deleteUserHandler(id);
        }}
      />

      <Modal isVisible={isFormVisible}>
        <NewUserForm
          createUserHandler={createUserHandler}
          onCloseForm={closeFormHandler}
        />
      </Modal>

      <Modal isVisible={isEditFormVisible}>
        <EditUserForm
          selectedUser={selectedUser}
          editUserHandler={editUserHandler}
          onCloseForm={closeFormHandler}
        />
      </Modal>
    </div>
  );
}

export default App;
