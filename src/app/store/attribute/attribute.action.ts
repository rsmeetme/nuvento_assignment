import { createAction, props } from "@ngrx/store";
import { AttributeModel } from "src/app/models/attribute.model";

export const getAttributes = createAction('[attribute] load attribute');

export const addAttribute = createAction('[attribute] add attribute', props<{ addAttribute: AttributeModel }>());

export const updateAttribute = createAction('[attribute] update attribute', props<{ updateAttribute: AttributeModel }>());

export const deleteAttribute = createAction('[attribute] remove attribute', props<{ attributeId: number }>());