import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./views/HomeScreen";
import GioHang from "./views/GioHang";
import { GioHangProvider } from "./GioHangProvider";
import Them from "./views/Them";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GioHangProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="GioHang" component={GioHang} />
          <Stack.Screen name="Them" component={Them} />
        </Stack.Navigator>
      </NavigationContainer>
    </GioHangProvider>
  );
}
