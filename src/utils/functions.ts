export const handleStoreRemoveProduct = (product: any) => {
  if (typeof window !== "undefined") {
    const products = localStorage.getItem("cart");
    //   console.log(products);
    if (!products) {
      localStorage.setItem(
        "cart",
        JSON.stringify([{ ...product, quantity: 1 }])
      );
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
  }
};

export const isProductStored = (product: any) => {
  if (typeof window !== "undefined") {
    const products = localStorage.getItem("cart");
    //   console.log(products);
    if (!products) {
      return false;
    }

    const parsedProducts = JSON.parse(products);

    const isExist = parsedProducts?.find(
      (storeProduct: any) => storeProduct.id === product.id
    );

    if (isExist) {
      return true;
    } else {
      return false;
    }
  }
};

export const quantityChange = (type: "increase" | "decrease", id: number) => {
  if (typeof window !== "undefined") {
    const products = localStorage.getItem("cart");

    const parsedProducts = JSON.parse(products as any);

    const isExist = parsedProducts.find(
      (stPro: any) => Number(stPro.id) === id
    );

    if (isExist) {
      if (type === "increase") {
        isExist.quantity = Number(isExist.quantity) + 1;
      } else if (type === "decrease") {
        isExist.quantity = Number(isExist.quantity) - 1;
      }

      localStorage.setItem("cart", JSON.stringify(parsedProducts));
    }
  }
};
