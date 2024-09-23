import { SafeAreaView, ScrollView, View } from "react-native";
import LottieView from "lottie-react-native";

const AppLoading = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="h-full w-full items-center justify-center relative">
          <LottieView
            source={require("../assets/lottie/loading.json")}
            autoPlay={true}
            loop={true}
            replay={true}
            style={{ width: 500, height: 500 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppLoading;
