import SafeScreen from "@/components/SafeScreen";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ChangePasswordScreen = () => {
  const router = useRouter();
  const { user } = useUser();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleChangePassword = async () => {
    // Validation
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "New passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      Alert.alert("Error", "New password must be at least 8 characters long");
      return;
    }

    try {
      setIsUpdating(true);
      await user?.updatePassword({
        currentPassword,
        newPassword,
      });
      Alert.alert("Success", "Password changed successfully!");
      router.back();
    } catch (error: any) {
      console.error("Error changing password:", error);
      Alert.alert(
        "Error",
        error.errors
          ? error.errors[0].message
          : "Failed to change password. Please check your current password."
      );
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <SafeScreen>
      <View className="flex-1 bg-background">
        {/* Header */}
        <View className="py-4 flex-row items-center border-b border-white/5 mb-6 px-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-surface p-2 rounded-full mr-4 border border-white/10"
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold">Change Password</Text>
        </View>

        <ScrollView
          className="flex-1 px-4"
          showsVerticalScrollIndicator={false}
        >
          {/* Current Password */}
          <View className="mb-5">
            <Text className="text-white font-bold mb-2">Current Password</Text>
            <View className="bg-surface p-4 rounded-2xl border border-white/10 flex-row items-center">
              <TextInput
                secureTextEntry={!showCurrentPassword}
                value={currentPassword}
                onChangeText={setCurrentPassword}
                placeholder="Enter current password"
                placeholderTextColor="#666"
                className="flex-1 text-white text-base"
              />
              <TouchableOpacity
                onPress={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                <Ionicons
                  name={showCurrentPassword ? "eye-off" : "eye"}
                  size={20}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* New Password */}
          <View className="mb-5">
            <Text className="text-white font-bold mb-2">New Password</Text>
            <View className="bg-surface p-4 rounded-2xl border border-white/10 flex-row items-center">
              <TextInput
                secureTextEntry={!showNewPassword}
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder="Enter new password"
                placeholderTextColor="#666"
                className="flex-1 text-white text-base"
              />
              <TouchableOpacity
                onPress={() => setShowNewPassword(!showNewPassword)}
              >
                <Ionicons
                  name={showNewPassword ? "eye-off" : "eye"}
                  size={20}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirm Password */}
          <View className="mb-6">
            <Text className="text-white font-bold mb-2">
              Confirm New Password
            </Text>
            <View className="bg-surface p-4 rounded-2xl border border-white/10 flex-row items-center">
              <TextInput
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm new password"
                placeholderTextColor="#666"
                className="flex-1 text-white text-base"
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Ionicons
                  name={showConfirmPassword ? "eye-off" : "eye"}
                  size={20}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Password Requirements */}
          <View className="bg-surface-light/20 p-4 rounded-2xl mb-6 border border-white/5">
            <View className="flex-row items-center mb-2">
              <Ionicons name="information-circle" size={18} color="#1DB954" />
              <Text className="text-white font-bold ml-2">
                Password Requirements
              </Text>
            </View>
            <Text className="text-gray-400 text-xs leading-5">
              • At least 8 characters long{"\n"}• Mix of uppercase and lowercase
              letters{"\n"}• Include at least one number{"\n"}• Include at least
              one special character
            </Text>
          </View>

          {/* Update Button */}
          <TouchableOpacity
            onPress={handleChangePassword}
            disabled={isUpdating}
            className={`bg-primary w-full py-4 rounded-[20px] items-center justify-center shadow-lg shadow-primary/20 ${
              isUpdating ? "opacity-50" : ""
            }`}
          >
            {isUpdating ? (
              <ActivityIndicator color="black" />
            ) : (
              <Text className="text-black text-lg font-bold">
                Update Password
              </Text>
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeScreen>
  );
};

export default ChangePasswordScreen;
