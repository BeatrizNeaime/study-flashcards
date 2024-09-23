import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import TabsLayout from "./app/(tabs)/_layout";
import AuthLayout from "./app/(auth)/_layout";
import auth from "@react-native-firebase/auth";

const App = () => {
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

   if (initializing) return null;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <StatusBar style="auto" />
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name="(tabs)"
            component={TabsLayout}
            options={{ headerShown: true }}
          />
        ) : (
          <Stack.Screen
            name="(auth)"
            component={AuthLayout}
            options={{ headerShown: true }}
          />
        )}
      </Stack.Navigator>
    </Stack>
  );
};

export default App;
