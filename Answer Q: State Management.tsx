import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';

class ProductsStore {
    products = [];
    cartItems = [];
    addresses = [];

    constructor() {
        makeObservable(this, {
            products: observable,
            cartItems: observable,
            addresses: observable,
            fetchProducts: action,
            fetchAddresses: action,
            addToCart: action,
            removeFromCart: action,
        });
    }

    fetchProducts() {
        axios
            .get('https://example-api.com/products')
            .then((response) => {
                this.products = response.data;
            })
            .catch((error) => console.error('Error fetching products: ', error));
    }

    fetchAddresses() {
        axios
            .get('https://example-api.com/addresses')
            .then((response) => {
                this.addresses = response.data;
            })
            .catch((error) => console.error('Error fetching addresses: ', error));
    }

    addToCart(product) {
        this.cartItems.push(product);
    }

    removeFromCart(productId) {
        const index = this.cartItems.findIndex((item) => item.id === productId);
        if (index !== -1) {
            this.cartItems.splice(index, 1);
        }
    }
}

const productsStore = new ProductsStore();
export default productsStore;
