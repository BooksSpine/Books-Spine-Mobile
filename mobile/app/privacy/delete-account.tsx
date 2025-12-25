import SafeScreen from "@/components/SafeScreen";
import { useAuth, useUser } from "@clerk/clerk-expo";
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

const DeleteAccountScreen = () => {
  const router = useRouter();
  const { user } = useUser();
  const { signOut } = useAuth();
  const [confirmText, setConfirmText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const consequences = [
    {
      id: "1",
      text: "All your order history will be permanently deleted",
      icon: "receipt-outline",
      color: "#EF4444",
    },
    {
      id: "2",
      text: "Your wishlist and saved items will be removed",
      icon: "heart-outline",
      color: "#EF4444",
    },
    {
      id: "3",
      text: "All saved addresses will be deleted",
      icon: "location-outline",
      color: "#EF4444",
    },
    {
      id: "4",
      text: "You will lose access to all your data",
      icon: "lock-closed-outline",
      color: "#EF4444",
    },
    {
      id: "5",
      text: "This action cannot be undone",
      icon: "warning-outline",
      color: "#EF4444",
    },
  ];

  const handleDeleteAccount = async () => {
    if (confirmText.toLowerCase() !== "delete") {
      Alert.alert("Error", 'Please type "DELETE" to confirm');
      return;
    }

    Alert.alert(
      "Final Confirmation",
      "Are you absolutely sure? This action is permanent and cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete Forever",
          style: "destructive",
          onPress: async () => {
            try {
              setIsDeleting(true);
              await user?.delete();
              await signOut();
              Alert.alert(
                "Account Deleted",
                "Your account has been permanently deleted."
              );
              router.replace("/(auth)/sign-in");
            } catch (error: any) {
              console.error("Error deleting account:", error);
              Alert.alert(
                "Error",
                error.errors
                  ? error.errors[0].message
                  : "Failed to delete account"
              );
            } finally {
              setIsDeleting(false);
            }
          },
        },
      ]
    );
  };

  return (
    <SafeScreen>
      <View className="flex-1 bg-background">
        {/* Header */}
        <View className="py-4 flex-row items-center border-b border-white/5 mb-4 px-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-surface p-2 rounded-full mr-4 border border-white/10"
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold">Delete Account</Text>
        </View>

        <ScrollView
          className="flex-1 px-4"
          showsVerticalScrollIndicator={false}
        >
          <View className="bg-red-500/10 p-4 rounded-2xl mb-6 border border-red-500/30">
            <View className="flex-row items-center mb-2">
              <Ionicons name="alert-circle" size={20} color="#EF4444" />
              <Text className="text-red-500 font-bold ml-2">Warning</Text>
            </View>
            <Text className="text-red-400 text-xs leading-5">
              Deleting your account is permanent and cannot be reversed. All
              your data will be permanently removed.
            </Text>
          </View>

          <Text className="text-white font-bold text-base mb-4">
            What Will Happen:
          </Text>

          {consequences.map((item) => (
            <View
              key={item.id}
              className="bg-surface p-3 rounded-xl mb-2 border border-white/5 flex-row items-center"
            >
              <View className="w-8 h-8 rounded-full bg-red-500/20 items-center justify-center mr-3">
                <Ionicons
                  name={item.icon as any}
                  size={16}
                  color={item.color}
                />
              </View>
              <Text className="text-gray-300 text-sm flex-1">{item.text}</Text>
            </View>
          ))}

          <View className="bg-surface-light/20 p-4 rounded-2xl my-6 border border-white/5">
            <Text className="text-white font-bold mb-3">
              Type "DELETE" to confirm
            </Text>
            <TextInput
              value={confirmText}
              onChangeText={setConfirmText}
              placeholder="Type DELETE here"
              placeholderTextColor="#666"
              className="bg-surface p-4 rounded-xl text-white border border-white/10"
              autoCapitalize="characters"
            />
          </View>

          <TouchableOpacity
            onPress={handleDeleteAccount}
            disabled={isDeleting || confirmText.toLowerCase() !== "delete"}
            className={`bg-red-500 w-full py-4 rounded-[20px] items-center justify-center mb-6 ${
              isDeleting || confirmText.toLowerCase() !== "delete"
                ? "opacity-50"
                : ""
            }`}
          >
            {isDeleting ? (
              <ActivityIndicator color="white" />
            ) : (
              <View className="flex-row items-center gap-2">
                <Ionicons name="trash" size={20} color="#fff" />
                <Text className="text-white text-lg font-bold">
                  Delete Account Forever
                </Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-surface w-full py-4 rounded-[20px] items-center justify-center mb-6 border border-white/10"
          >
            <Text className="text-white text-base font-bold">
              Cancel - Keep My Account
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeScreen>
  );
};

export default DeleteAccountScreen;
