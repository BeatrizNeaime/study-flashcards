import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { useFonts, Poppins_600Regular } from "@expo-google-fonts/poppins";
import { Nunito_400Regular } from "@expo-google-fonts/nunito";
import bg from "../assets/images/Ellipse.png";
import cards from "../assets/images/cards.png";
import Button from "../components/Button";
import { router } from "expo-router";
import Title from "./../components/Title";

export default function Index() {
  let [fontsLoaded] = useFonts({
    Poppins_600Regular,
    Nunito_400Regular,
  });

  return (
    <SafeAreaView className="h-full bg-white">
      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="h-full w-full items-center justify-start relative">
          <Image
            source={bg}
            resizeMode="contain"
            className="absolute top-0 right-0 w-full"
          />
          <Title
            otherStyles="mt-[120px] mb-[50px]"
            label={"Study Flashcards"}
          />
          <Text
            style={{
              fontFamily: "Nunito_400Regular",
              fontSize: 22,
              textAlign: "center",
            }}
          >
            Aprenda de forma inteligente, um flashcard de cada vez!.
          </Text>
          <Image source={cards} resizeMode="contain" className="w-full mt-20" />
          <Button
            label={"Começar"}
            size={"lg"}
            otherStyles={"w-10/12 mt-10"}
            handleClick={() => router.push("login")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
