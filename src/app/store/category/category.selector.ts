import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Category } from "src/app/models/category.model";

export const getCategoryListSelector = createFeatureSelector<Category>('category');

export const getCategories = createSelector(getCategoryListSelector, (state) => {
    return state.categoryList;
})