import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const isAndroid = Platform.OS === 'android'

export const RestaurantsScreen = () => (
    <SafeAreaView style={styles.container}>
        <View style={styles.search}>
            <Searchbar />
        </View>
        <View style={styles.list}>
            <RestaurantInfoCard />
        </View>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: isAndroid ? StatusBar.currentHeight : 0
    },
    search: {
        padding: 16
    },
    list: {
        flex: 1,
        padding: 16,
    }
});
