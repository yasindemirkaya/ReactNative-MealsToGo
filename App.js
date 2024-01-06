import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

const isAndroid = Platform.OS === 'android'

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto"></ExpoStatusBar>
    </>
  );
}

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
    backgroundColor: 'blue'
  }
});
