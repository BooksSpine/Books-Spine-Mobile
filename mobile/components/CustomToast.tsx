import { View, Text, Platform } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  FadeInUp,
  FadeOutUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface CustomToastProps {
  message: string;
  type?: "success" | "error" | "info";
}

const CustomToast = ({ message, type = "success" }: CustomToastProps) => {
  const insets = useSafeAreaInsets();
  const top = useSharedValue(-100);

  useEffect(() => {
    top.value = withSpring(insets.top + 10);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      top: top.value,
    };
  });

  const getIconName = () => {
    switch (type) {
      case "success":
        return "checkmark-circle";
      case "error":
        return "alert-circle";
      case "info":
        return "information-circle";
      default:
        return "checkmark-circle";
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "rgba(29, 185, 84, 0.9)"; // Primary Green
      case "error":
        return "rgba(225, 29, 72, 0.9)"; // Red
      case "info":
        return "rgba(59, 130, 246, 0.9)"; // Blue
      default:
        return "rgba(29, 185, 84, 0.9)";
    }
  };

  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutUp}
      style={[
        {
          position: "absolute",
          left: 20,
          right: 20,
          zIndex: 100,
          backgroundColor: getBackgroundColor(),
          padding: 16,
          borderRadius: 16,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 5,
        },
        animatedStyle,
      ]}
    >
      <Ionicons name={getIconName()} size={24} color="#fff" />
      <Text className="text-white font-bold ml-3 text-base flex-1">
        {message}
      </Text>
    </Animated.View>
  );
};

export default CustomToast;
