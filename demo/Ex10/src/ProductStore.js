import { makeObservable, observable, computed, action } from "mobx";
class ProductStore {
  products = [];

  constructor() {
    makeObservable(this, {
      products: observable,
      addNewProduct: action,
      removeProduct: action,
      totalPrice: computed,
      allProducts: computed,
    });
  }

  addNewProduct(prod) {
    this.products.push(prod);
  }
  get totalPrice() {
    const total = this.products.reduce((acc, curr) => {
      return acc + Number(curr.price);
    }, 0);
    return total;
  }
  get allProducts() {
    return this.products;
  }
  removeProduct(id) {
    this.products = this.products.filter((item) => {
      return item.id !== id;
    });
  }
}

export default ProductStore;
