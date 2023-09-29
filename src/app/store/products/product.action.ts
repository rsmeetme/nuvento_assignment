import { createAction, props } from "@ngrx/store";
import { ProductModel } from "src/app/models/product.model";

export const getProducts = createAction('[product] load product');

export const addProduct = createAction('[product] add product', props<{ addProduct: ProductModel }>());

export const updateProduct = createAction('[product] update product', props<{ updateProduct: ProductModel }>());

export const deleteProduct = createAction('[product] remove product', props<{ productId: number }>());