import { Text } from "react-native";
import { Poppins_600Regular, useFonts } from "@expo-google-fonts/poppins";

const Title = ({ label, otherStyles }) => {
  let [fontsLoaded] = useFonts({
    Poppins_600Regular,
  });
  return (
    <Text
      className={`font-poppins font-semibold text-4xl ${otherStyles}`}
      style={{ fontFamily: Poppins_600Regular }}
    >
      {label}
    </Text>
  );
};

export default Title;
