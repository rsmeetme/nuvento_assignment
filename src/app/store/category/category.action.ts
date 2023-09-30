import { createAction, props } from "@ngrx/store";
import { CategoryModel } from "src/app/models/category.model";

export const getCategories = createAction('[cateogry] load cateogry');

export const addCategory = createAction('[cateogry] add cateogry', props<{ addCategory: CategoryModel }>());

export const updateCategory = createAction('[cateogry] update cateogry', props<{ updateCategory: CategoryModel }>());

export const deleteCategory = createAction('[cateogry] remove cateogry', props<{ categoryId: number }>());