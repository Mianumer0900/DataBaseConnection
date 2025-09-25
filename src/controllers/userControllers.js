import {
  createUserService,
  getAllUsersServices,
  getUsersById,
  deleteUserByIDservices,
  updateUserIDServices,
} from "../services/userService.js";
import handleResponse from "../utilies/handleResponse.js";

export const createUser = async (req, res) => {
  const newUser = await createUserService(req.body);
  handleResponse(res, 201, "User Created Successfully", newUser);
};

export const getAllUsers = async (req, res) => {
  const users = await getAllUsersServices();
  handleResponse(res, 200, "Users fetched successfully", users);
};

export const getUsersByID = async (req, res) => {
  const user = await getUsersById(req.params.id);
  if (user) {
    handleResponse(res, 200, "User fetched successfully", user);
  } else {
    handleResponse(res, 404, "User record not found!", user);
  }
};

export const deleteUsersBYID = async (req, res) => {
  const user = await deleteUserByIDservices(req.params.id);
  if (user) {
    handleResponse(res, 200, "User deleted successfully", user);
  } else {
    handleResponse(res, 404, "User record not found!", user);
  }
};

export const updateUserByID = async (req, res) => {
  try {
    const user = await updateUserIDServices(req.params.id, req.body);
    if (user) {
      handleResponse(res, 200, "user updated Successfully" ,user);
    } else {
      handleResponse(res, 404, "Record Not Found", user);
    }
  } catch (error) {
    console.error("Error While Updating User", error);
    handleResponse(res, 500, "Server error");
  }
};
