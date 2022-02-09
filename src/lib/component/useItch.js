import { useContext } from "react";
import ItchContext from "./ItchContext";

export default function useItch() {
  return useContext(ItchContext);
}
