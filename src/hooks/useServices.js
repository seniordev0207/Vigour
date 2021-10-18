import { useEffect, useState } from "react";

export default function useServices() {
    const [services, setServices] = useState(null);
    useEffect(() => {
        fetch('/services.json').then(result => result.json())
            .then(data => setServices(data));
    }, [])
    return services;
}