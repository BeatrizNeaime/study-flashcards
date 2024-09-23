import { Text, TouchableOpacity } from "react-native";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { LinearGradient } from "expo-linear-gradient";

const Button = ({
  size,
  label,
  handleClick,
  otherStyles,
  textStyles,
  isLoading,
}) => {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  let sizeClass;
  let fontSize = "text-[24px]";

  if (size === "lg") {
    sizeClass = "h-[52px]";
  } else if (size === "md") {
    sizeClass = "h-[40px]";
  } else {
    sizeClass = "h-[32px]";
    fontSize = "text-[20px]";
  }

  return (
    <TouchableOpacity
      className={`${sizeClass}  flex items-center justify-center mt-10 ${otherStyles} ${
        isLoading ? "opacity-5" : ""
      } `}
      onPress={handleClick}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 7,
      }}
    >
      <LinearGradient
        colors={["#B8E4C9", "#A7C7E7", "#FFD1A9"]} // As três cores do gradiente
        locations={[0, 0.49, 0.94]} // Posições relativas das cores
        start={{ x: 0, y: 0 }} // Início (extremo esquerdo)
        end={{ x: 1, y: 0 }}
        className="h-full rounded-lg w-full m-0 px-5 items-center justify-center"
      >
        <Text className={`${fontSize} ${textStyles} font-bold text-white`}>
          {label}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
