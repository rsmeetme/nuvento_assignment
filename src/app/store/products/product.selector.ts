import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "src/app/models/product.model";

export const getProductListSelector = createFeatureSelector<Product>('product');

export const getProducts = createSelector(getProductListSelector, (state) => {
    return state.productList
})