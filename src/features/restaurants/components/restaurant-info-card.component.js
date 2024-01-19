import React from 'react'
import styled from 'styled-components/native'
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        icon,
        photos = ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
        address = "Some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemp = !isOpenNow,
    } = restaurant;

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </RestaurantCard>
    )
}

const Title = styled(Text)`
padding: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;