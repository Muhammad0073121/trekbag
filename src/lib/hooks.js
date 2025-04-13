import { useContext } from "react";
import { ItemContext } from "../contexts/ItemsContextProvider";

export function useItemContext() {
  return useContext(ItemContext);
}
