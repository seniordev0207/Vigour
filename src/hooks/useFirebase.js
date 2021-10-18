import { useState } from "react";

const useFirebase = () => {
    const [user, setUser] = useState(null);

    return {
        user, setUser
    }
};

export default useFirebase;