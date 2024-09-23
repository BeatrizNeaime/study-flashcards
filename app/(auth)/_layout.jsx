import { Stack } from "expo-router";
import { StatusBar } from "react-native";

const AuthLayout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
};

export default AuthLayout;
