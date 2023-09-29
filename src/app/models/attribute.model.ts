export interface AttributeModel {
    id: number;
    name: string;
    values: string[];
}

export interface Attribute{
    attributeList:AttributeModel[]
}