import SafeScreen from "@/components/SafeScreen";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const EditProfile = () => {
  const router = useRouter();
  const { user } = useUser();
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const handleUpdate = async () => {
    if (!firstName || !lastName) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      setIsUpdating(true);
      await user?.update({
        firstName,
        lastName,
      });
      Alert.alert("Success", "Profile updated successfully");
      router.back();
    } catch (error: any) {
      console.error("Error updating profile:", error);
      Alert.alert(
        "Error",
        error.errors ? error.errors[0].message : "Failed to update profile"
      );
    } finally {
      setIsUpdating(false);
    }
  };

  const handleImagePick = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"] as any,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
        base64: true,
      });

      if (!result.canceled && result.assets[0].base64) {
        setIsUploadingImage(true);
        const base64 = result.assets[0].base64;
        const mimeType = result.assets[0].mimeType || "image/jpeg";
        const imageUri = `data:${mimeType};base64,${base64}`;

        await user?.setProfileImage({ file: imageUri });
        Alert.alert("Success", "Profile picture updated!");
      }
    } catch (error: any) {
      console.error("Error updating profile picture:", error.message || error);
      Alert.alert("Error", "Failed to update profile picture");
    } finally {
      setIsUploadingImage(false);
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
          <Text className="text-white text-xl font-bold">Edit Profile</Text>
        </View>

        <View className="px-4 gap-6">
          {/* User Avatar */}
          <View className="items-center mb-4">
            <TouchableOpacity
              onPress={handleImagePick}
              disabled={isUploadingImage}
              className="relative w-24 h-24 rounded-full bg-surface border border-white/10 items-center justify-center overflow-hidden"
            >
              {isUploadingImage ? (
                <ActivityIndicator color="#1DB954" />
              ) : user?.imageUrl ? (
                <Image
                  source={{ uri: user.imageUrl }}
                  className="w-full h-full"
                />
              ) : (
                <Text className="text-white text-3xl font-bold">
                  {firstName?.charAt(0) || "U"}
                </Text>
              )}

              {!isUploadingImage && (
                <View className="absolute bottom-0 left-0 right-0 bg-black/50 py-1 items-center">
                  <Ionicons name="camera" size={12} color="#fff" />
                </View>
              )}
            </TouchableOpacity>
            <Text className="text-gray-500 text-sm mt-2">
              Tap to change photo
            </Text>
          </View>

          <View>
            <Text className="text-white font-bold mb-2 ml-1 text-base">
              First Name
            </Text>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              className="bg-surface p-4 rounded-2xl text-white border border-white/10 text-lg"
              placeholder="Enter first name"
              placeholderTextColor="#666"
            />
          </View>
          <View>
            <Text className="text-white font-bold mb-2 ml-1 text-base">
              Last Name
            </Text>
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              className="bg-surface p-4 rounded-2xl text-white border border-white/10 text-lg"
              placeholder="Enter last name"
              placeholderTextColor="#666"
            />
          </View>

          <View className="mt-4">
            <Text className="text-gray-500 mb-2 ml-1">Email</Text>
            <View className="bg-surface/50 p-4 rounded-2xl border border-white/5">
              <Text className="text-gray-400">
                {user?.primaryEmailAddress?.emailAddress}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={handleUpdate}
            disabled={isUpdating}
            className={`bg-primary w-full py-4 rounded-[20px] items-center justify-center mt-4 shadow-lg shadow-primary/20 ${
              isUpdating ? "opacity-50" : ""
            }`}
          >
            {isUpdating ? (
              <ActivityIndicator color="black" />
            ) : (
              <Text className="text-black text-lg font-bold">Save Changes</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeScreen>
  );
};
export default EditProfile;
