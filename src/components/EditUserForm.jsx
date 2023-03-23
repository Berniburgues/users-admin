import React from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = ({ selectedUser, editUserHandler, onCloseForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: selectedUser,
  });

  const handleCancel = () => {
    onCloseForm();
  };

  return (
    <form onSubmit={handleSubmit(editUserHandler)} className="bg-gray-200 p-4 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-2">Edit User</h2>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="firstNameId" className="text-lg font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstNameId"
            className="p-2 rounded-lg border-2 border-gray-300"
            {...register('first_name', { required: true })}
          />
          {errors.first_name && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastNameId" className="text-lg font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastNameId"
            className="p-2 rounded-lg border-2 border-gray-300"
            {...register('last_name', { required: true })}
          />
          {errors.last_name && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="emailId" className="text-lg font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="emailId"
            className="p-2 rounded-lg border-2 border-gray-300"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="passwordId" className="text-lg font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="passwordId"
            className="p-2 rounded-lg border-2 border-gray-300"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="birthdayId" className="text-lg font-medium mb-2">
            Birthday
          </label>
          <input
            type="date"
            id="birthdayId"
            className="p-2 rounded-lg border-2 border-gray-300"
            {...register('birthday', { required: true })}
          />
          {errors.birthday && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-green-500 text-white rounded-lg py-2 px-6 hover:bg-green-600"
          >
            Edit User
          </button>
          <button
            type="button"
            className="bg-red-500 text-white rounded-lg py-2 px-6 hover:bg-red-600 ml-4"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditUserForm;
