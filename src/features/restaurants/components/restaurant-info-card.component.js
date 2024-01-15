import React from 'react'
import styled from 'styled-components/native'
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
    padding: 16px;
    color: red;
`;

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
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white"
    },
    cover: {
        padding: 16,
        backgroundColor: "white"
    },
    title: {
        padding: 16
    },
});