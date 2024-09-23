import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import bg from "@/assets/images/Ellipse.png";
import { Image } from "react-native";
import Title from "@/components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { FIREBASE_AUTH } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const auth = FIREBASE_AUTH;

  const onSubmit = async () => {
    if (form.password !== form.confirmPassword) {
      alert("As senhas não coincidem");
      setForm({ ...form, confirmPassword: "" });
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        form.email,
        form.password
      );
      console.log(res);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsSubmitting(false);
    }

    console.log(form);
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
          <Title otherStyles="mt-[120px] mb-[50px]" label={"Cadastro"} />
          <KeyboardAvoidingView behavior="padding" className="px-4">
            <Input
              otherStyles={"mb-[40px]"}
              label={"Nome"}
              required={true}
              value={form.name}
              placeholder={"João Silva"}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
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
            <Input
              otherStyles={"mb-[40px]"}
              label={"Confirmar Senha"}
              secureText={true}
              required={true}
              value={form.confirmPassword}
              onChangeText={(text) =>
                setForm({ ...form, confirmPassword: text })
              }
              placeholder={"••••"}
            />
            <Button
              label={"Cadastrar"}
              size={"lg"}
              otherStyles={"mt-10"}
              handleClick={onSubmit}
            />
            <TouchableOpacity
              className="mt-3 text-center w-100 items-center"
              onPress={() => router.push("/login")}
            >
              <Text className=" text-gray">
                Já tem uma conta?{" "}
                <Text className="text-blue font-bold underline">Entre</Text>
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
