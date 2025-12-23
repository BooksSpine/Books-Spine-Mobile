import React from "react";
import SafeScreen from "@/components/SafeScreen";
import { Text } from "react-native";

const HomeScreen = () => {
  return (
    <SafeScreen>
      <Text className="text-2xl font-bold text-white">HomeScreen</Text>
    </SafeScreen>
  );
};

export default HomeScreen;
