import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import EmployeeDetail from "../screens/EmployeeDetail";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator  headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Employee" component={EmployeeDetail} />
    </Stack.Navigator>
  );
}
