import { createAction, props } from "@ngrx/store";

export const displaySuccess = createAction(
  "[NOTIFY] success",
  props<{ title: string; description: string }>()
);

export const displayWarning = createAction(
  "[NOTIFY] warning",
  props<{ title: string; description: string }>()
);

export const displayError = createAction(
  "[NOTIFY] error",
  props<{ title: string; description: string }>()
);
