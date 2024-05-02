import { useDispatch } from "react-redux";
import { AppDispatch } from "~/main/core/store/types";

export const useAppDispatch = () => useDispatch<AppDispatch>();
