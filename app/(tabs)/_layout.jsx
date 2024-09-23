import { Stack } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StatusBar } from "react-native";
const TabsLayout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="home"
          options={{
            headerShown: false,
            TabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
};

export default TabsLayout;
