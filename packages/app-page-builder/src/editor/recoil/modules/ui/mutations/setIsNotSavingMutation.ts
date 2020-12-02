import { MutationActionCallable } from "@webiny/app-page-builder/editor/recoil/eventActions";
import { UiAtomType } from "@webiny/app-page-builder/editor/recoil/modules";

export const setIsNotSavingMutation: MutationActionCallable<UiAtomType> = state => {
    return {
        ...state,
        isSaving: false
    };
};