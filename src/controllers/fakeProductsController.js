import FakeProduct from "../services/fakeProducts.service.js";

const FakeProductService = new FakeProduct();
const getFakeProducts = async (req, res) => {
  try {
    let products = await FakeProductService.getFakeProducts();
    return res.status(201).json(products);
  } catch (err) {
    return res.send(401).json({ status: "error", error: error });
  }
};

export default {
  getFakeProducts,
};
