import { View, SafeAreaView, StatusBar, ScrollView, Text } from "react-native";
import bg from "@/assets/images/Ellipse.png";
import { Image } from "react-native";
import Title from "@/components/Title";
import Input from "../../components/Input";
import Button from "@/components/Button";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { FIREBASE_AUTH } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setIsSubmitting(true);
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      console.log(res);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const signUp = async () => {
    setIsSubmitting(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      console.log(res);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <StatusBar style="dark" />
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
          <Title otherStyles="mt-[120px] mb-[50px]" label={"Entrar"} />
          <View className="px-4">
            <Input
              otherStyles={"mb-[40px]"}
              label={"E-mail"}
              required={true}
              kType={"email"}
              value={form.email}
              placeholder={"exemplo@exemplo.com"}
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
            <Input
              otherStyles={"mb-[40px]"}
              label={"Senha"}
              secureText={true}
              required={true}
              value={form.password}
              onChangeText={(text) => setForm({ ...form, password: text })}
              placeholder={"••••"}
            />
            <Button
              isLoading={isSubmitting}
              label={"Entrar"}
              size={"lg"}
              otherStyles={"mt-10"}
              handleClick={signIn}
            />
            <TouchableOpacity
              className="mt-3 text-center w-100 items-center"
              onPress={() => router.push("/sign-up")}
            >
              <Text className=" text-gray">
                Não tem uma conta?{" "}
                <Text className="text-blue font-bold underline">
                  Cadastre-se
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
