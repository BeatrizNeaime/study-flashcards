import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const Input = ({
  label,
  otherStyles,
  placeholder,
  value,
  handleChangeText,
  secureText,
  required,
  kType,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
  });
  return (
    <View className={`${otherStyles} space-y-2`}>
      <Text
        className={`text-[16px]`}
        style={{ fontFamily: "Roboto_400Regular" }}
      >
        {label} {required && <Text className="text-red-600 text-sm ">*</Text>}
      </Text>
      <View className="w-full h-[54px] px-4 bg-white rounded-xl border border-blue focus:border-orange flex flex-row items-center justify-center">
        <TextInput
          className="w-full h-full text-[16px] text-black"
          placeholder={placeholder}
          value={value}
          onChangeText={handleChangeText}
          secureTextEntry={secureText && !showPassword}
          keyboardType={kType}
          {...props}
        />
        {secureText && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-0 mr-4"
          >
            {showPassword ? (
              <Feather name="eye-off" size={24} color={Colors.gray} />
            ) : (
              <Feather name="eye" size={24} color={Colors.gray} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
