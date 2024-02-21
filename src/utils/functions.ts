export const handleStoreRemoveProduct = async (product: any) => {
  const products = localStorage.getItem("cart");
  //   console.log(products);
  if (!products) {
    localStorage.setItem("cart", JSON.stringify([{ ...product, quantity: 1 }]));
  } else {
    const parsedProducts = JSON.parse(products);

    const isExist = parsedProducts?.find(
      (storeProduct: any) => storeProduct.id === product.id
    );

    if (isExist) {
      const restProducts = parsedProducts?.filter(
        (storeProduct: any) => storeProduct.id !== product.id
      );

      localStorage.setItem("cart", JSON.stringify(restProducts));
    } else {
      parsedProducts.push({ ...product, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(parsedProducts));
    }
  }
};
