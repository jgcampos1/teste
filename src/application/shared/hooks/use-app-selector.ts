import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppState } from "~/main/core/store/store";

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
