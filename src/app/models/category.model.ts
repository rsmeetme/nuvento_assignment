export interface CategoryModel {
    id: number;
    name: string;
    parentId: number;
}

export interface Category {
    categoryList: CategoryModel[];
}