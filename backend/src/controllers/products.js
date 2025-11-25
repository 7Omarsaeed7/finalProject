const getAllProducts = async (req, res) => {
  res.send("all products");
};
const createOneProduct = async (req, res) => {
  res.send("new product");
};
const getOneProduct = async (req, res) => {
  res.send("existing product");
};
const updateOneProduct = async (req, res) => {
  res.send("updated product");
};
const deleteOneProduct = async (req, res) => {
  res.send("deleted one product");
};
module.exports = {
  getAllProducts,
  createOneProduct,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
