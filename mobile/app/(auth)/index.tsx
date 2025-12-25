import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import useSocialAuth from "../../hooks/UseSocialAuth";
import { Image } from "expo-image";

const AuthScreen = () => {
  const { LodingStrategy, handleSocialAuth } = useSocialAuth();

  return (
    <View className="px-8 flex-1 bg-white items-center justify-center">
      <Image
        source={require("../../assets/images/auth-image.png")}
        className="size-96"
        contentFit="contain"
      />
      <View className="gap-2 mt-4">
        {/* google Sign in Button */}
        <TouchableOpacity
          onPress={() => handleSocialAuth("oauth_google")}
          disabled={LodingStrategy === "oauth_google"}
          className="flex-row items-center justify-center gap-2 border-gray-300 border bg-white rounded-full px-6 py-3"
          style={{
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            elevation: 2,
          }}
        >
          {LodingStrategy === "oauth_google" ? (
            <>
              <ActivityIndicator size="small" color={"#4285f4"} />
            </>
          ) : (
            <View className="flex-row items-center gap-2">
              <Image
                source={require("../../assets/images/google.png")}
                className="size-10 mr-3"
                contentFit="contain"
              />
              <Text className="text-black font-medium text-base">
                Continue with Google
              </Text>
            </View>
          )}
        </TouchableOpacity>

        {/* apple Sign in Button */}
        <TouchableOpacity
          onPress={() => handleSocialAuth("oauth_apple")}
          disabled={LodingStrategy === "oauth_apple"}
          className="flex-row items-center justify-center gap-2 border-gray-300 border bg-white rounded-full px-6 py-3"
          style={{
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            elevation: 2,
          }}
        >
          {LodingStrategy === "oauth_apple" ? (
            <>
              <ActivityIndicator size="small" color={"#4285f4"} />
            </>
          ) : (
            <View className="flex-row items-center gap-2">
              <Image
                source={require("../../assets/images/apple.png")}
                className="size-8 mr-3"
                contentFit="contain"
              />
              <Text className="text-black font-medium text-base">
                Continue with Apple
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <Text className="text-center mt-6 px-2 text-gray-500 text-xs leading-4">
        By Signing up, you agree to our{" "}
        <Text className="text-blue-500 font-medium">Terms and Conditions</Text>,{" "}
        <Text className="text-blue-500 font-medium">Privacy Policy</Text> and{" "}
        <Text className="text-blue-500 font-medium">Cookie Policy</Text>
      </Text>
    </View>
  );
};

export default AuthScreen;
