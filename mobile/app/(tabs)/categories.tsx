import { View, Text } from "react-native";
import React from "react";
import SafeScreen from "@/components/SafeScreen";

const CategoriesScreen = () => {
  return (
    <SafeScreen>
      <Text className="text-text-primary text-3xl font-bold tracking-tight">
        Categories
      </Text>
    </SafeScreen>
  );
};

export default CategoriesScreen;
