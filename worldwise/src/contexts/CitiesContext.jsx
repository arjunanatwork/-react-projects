import {createContext, useContext, useEffect, useState} from "react";

const CitiesContext = createContext();
const BASE_URL = 'http://localhost:8000';

function CitiesProvider({children}) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCities() {
            try {
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                setCities(data)
            } catch {
                alert("Failed to fetch cities.");
            } finally {
                setIsLoading(false);
            }
        }

        fetchCities();
    }, []);

    return <CitiesContext.Provider value={{
        cities, isLoading
    }}>{children}</CitiesContext.Provider>;
}

function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined) throw new Error('CitiesContext was used outside Cities Provider');
    return context;
}

export {CitiesProvider, useCities};