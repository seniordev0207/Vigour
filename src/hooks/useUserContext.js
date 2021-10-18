import { useContext } from "react";
import { UserContext } from "../components/AuthContext/AuthContext";

export default function useUserContext() {
    return useContext(UserContext);
}