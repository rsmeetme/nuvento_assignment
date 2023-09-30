import { createReducer, on } from "@ngrx/store";
import { AttributeState } from "./attribute.state";
import { addAttribute, deleteAttribute, getAttributes, updateAttribute } from "./attribute.action";


const _attributeReducer = createReducer(
    AttributeState,
    on(getAttributes, (state) => {
        return {
            ...state
        }
    }),
    on(addAttribute, (state, action) => {
        const _attribute = action.addAttribute;
        return {
            ...state,
            attributeList: [...state.attributeList, _attribute]
        }
    }),
    on(updateAttribute, (state, { updateAttribute }) => {
        const _attributes = state.attributeList.map((attribute) => {
            if (attribute.id == updateAttribute.id) {
                return { ...attribute, ...updateAttribute };
            }
            return attribute;
        });
        return {
            ...state,
            attributeList: [..._attributes]
        }
    }),
    on(deleteAttribute, (state, { attributeId }) => {
        const _attributes = state.attributeList.filter(attribute => attribute.id != attributeId);
        return {
            ...state,
            attributeList: [..._attributes]
        }
    })
)


export function attributeReducer(state: any, action: any) {
    return _attributeReducer(state, action);
}