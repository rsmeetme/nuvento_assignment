import { createReducer, on } from "@ngrx/store";
import { ProductState } from "./product.state";
import { addProduct, deleteProduct, getProducts, updateProduct } from "./product.action";

const _productReducer = createReducer(
    ProductState,
    on(getProducts, (state) => {
        return {
            ...state
        }
    }),
    on(addProduct, (state, action) => {
        const _product = action.addProduct;
        return {
            ...state,
            productList: [...state.productList, _product]
        }
    }),
    on(updateProduct, (state, { updateProduct }) => {
        const _products = state.productList.map((product) => {
            if (product.id == updateProduct.id) {
                return { ...product, ...updateProduct };
            }
            return product;
        });
        return {
            ...state,
            productList: [..._products]
        }
    }),
    on(deleteProduct, (state, { productId }) => {
        const _products = state.productList.filter(product => product.id != productId);
        return {
            ...state,
            productList: [..._products]
        }
    })
)


export function productReducer(state: any, action: any) {
    return _productReducer(state, action);
}