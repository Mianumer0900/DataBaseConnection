import createUserService from "../services/userService.js";
import handleResponse from "../utilies/handleResponse.js";

export const createUser = async (req, res) => {
    const newUser = await createUserService(req.body);
    handleResponse(res, 201 , "User Created Successfully" , newUser)
};
