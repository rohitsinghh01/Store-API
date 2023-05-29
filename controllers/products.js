const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Get all products" });
};

const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "Get products static" });
};

module.exports = { getAllProducts, getAllProductsStatic };
