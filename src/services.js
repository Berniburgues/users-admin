import axios from 'axios';

const BASE_URL = 'https://users-crud.academlo.tech/';

export const getUsers = async () => {
  try {
    const res = await axios.get(BASE_URL + 'users/');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (userData) => {
  try {
    const res = await axios.post(BASE_URL + 'users/', userData);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (id, updatedData) => {
  try {
    const res = await axios.put(`${BASE_URL}users/${id}/`, updatedData);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${BASE_URL}users/${id}/`);
  } catch (error) {
    console.error(error);
  }
};
