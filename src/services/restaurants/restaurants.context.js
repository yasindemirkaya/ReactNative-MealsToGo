import React, { useState, createContext, useEffect, useMemo, useContext } from 'react';

// Servis dosyası altından request ve transform methodlarımızı çağırıyoruz.
// Bu methodları restaurant provider içerisinde kullanacağız.
// Servis istekleri ve diğer işlemleri burada yapmıyoruz. Services içerisinde yapıyoruz.
// Burada sadece method çağırımlarını yapıyoruz ve datayı, loading ve error durumlarını set ediyoruz

import { restaurantRequest, restaurantTransform } from './restaurants.service';

import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);


    const retrieveRestaurants = (loc) => {
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(() => {
            restaurantRequest(loc)
                .then(restaurantTransform)
                .then((results) => {
                    setIsLoading(false)
                    setRestaurants(results)
                })
                .catch(error => {
                    setIsLoading(false)
                    setError(error)
                })
        }, 2000);
    }

    // Boş array mounted anlamına gelir. Sayfa açıldığında bu method çalışır
    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        }
    }, [location])

    // RestaurantProvider kullanılan yerde elimizde servisten dönen restoranlar, loading ve error durumları value olarak yer alır
    return (
        <RestaurantsContext.Provider
            value={{
                restaurants,
                isLoading,
                error
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    )
}