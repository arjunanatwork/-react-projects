import {createContext, useContext, useEffect, useState} from "react";

const CitiesContext = createContext();
const BASE_URL = 'http://localhost:8000';

function CitiesProvider({children}) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

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

    async function getCity(id) {
        try {
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await res.json();
            setCurrentCity(data)
        } catch {
            alert("Failed to fetch cities.");
        } finally {
            setIsLoading(false);
        }
    }

    async function createCity(newCity) {
        try {
            const res = await fetch(`${BASE_URL}/cities`, {
                method: "POST",
                body: JSON.stringify(newCity),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            setCities(cities => [...cities, newCity]);
        } catch {
            alert("Error creating the city");
        } finally {
            setIsLoading(false);
        }
    }

    async function deleteCity(id) {
        try {
            setIsLoading(true)
            await fetch(`${BASE_URL}/cities/${id}`, {
                method: "DELETE"
            });
            setCities(cities => cities.filter(ci => ci.id !== id));
        } catch {
            alert("Error deleting the city");
        } finally {
            setIsLoading(false);
        }
    }

    return <CitiesContext.Provider value={{
        cities, isLoading, currentCity, getCity, createCity, deleteCity
    }}>{children}</CitiesContext.Provider>;
}

function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined) throw new Error('CitiesContext was used outside Cities Provider');
    return context;
}

export {CitiesProvider, useCities};