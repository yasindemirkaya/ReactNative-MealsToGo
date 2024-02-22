import { mocks, mockImages } from "./mock"
import camelize from 'camelize'

// Service içerisinde restoranlara istek atan requestimiz ve response'u transform eden bir fonskiyonumuz var

export const restaurantRequest = (location) => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject('not found')
        }
        resolve(mock);
    })
}

export const restaurantTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
        });
        return {
            ...restaurant,
            rating: restaurant.rating,
            address: restaurant.vicinity,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
        };
    });
    return camelize(mappedResults);
}

