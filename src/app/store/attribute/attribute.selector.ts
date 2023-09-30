import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Attribute } from "src/app/models/attribute.model";

export const getAttributeListSelector = createFeatureSelector<Attribute>('attribute');

export const getAttributes = createSelector(getAttributeListSelector, (state) => {
    return state.attributeList;
})