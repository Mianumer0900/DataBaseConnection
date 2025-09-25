import {
  createItemServices,
  getAllItemsServices,
  getItemsByIDServices,
  deleteItemIDServices,
  updateItemsIDServices,
} from "../services/basketServices.js";
import handleResponse from "../utilies/handleResponse.js";

export const createItem = async (req, res) => {
  const newItem = await createItemServices(req.body);
  handleResponse(res, 201, "Item Created Successfully", newItem);
};

export const getAllItems = async (req, res) => {
  const items = await getAllItemsServices();
  handleResponse(res, 200, "Items fetched successfully", items);
};

export const getItemByID = async (req, res) => {
  const item = await getItemsByIDServices(req.params.id);
  if (item) {
    handleResponse(res, 200, "Item fetched successfully", item);
  } else {
    handleResponse(res, 404, "Item record not found!", item);
  }
};

export const deleteItemByID = async (req, res) => {
  const item = await deleteItemIDServices(req.params.id);
  if (item) {
    handleResponse(res, 200, "Item deleted successfully", item);
  } else {
    handleResponse(res, 404, "Item record not found!", item);
  }
};

export const updateItemByID = async (req, res) => {
  try {
    const item = await updateItemsIDServices(req.params.id, req.body);
    if (item) {
      handleResponse(res, 200, "item updated Successfully", item);
    } else {
      handleResponse(res, 404, "Record Not Found", item);
    }
  } catch (error) {
    console.error("Error While Updating item", error);
    handleResponse(res, 500, "Server error");
  }
};
