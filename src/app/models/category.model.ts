export interface CategoryModel {
    id: number;
    name: string;
    parentId: any;
}

export interface Category {
    categoryList: CategoryModel[];
}