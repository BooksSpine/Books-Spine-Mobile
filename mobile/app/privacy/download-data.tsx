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
  TouchableOpacity,
  View,
} from "react-native";

const DownloadDataScreen = () => {
  const router = useRouter();
  const { user } = useUser();
  const [isDownloading, setIsDownloading] = useState(false);

  const dataCategories = [
    {
      id: "1",
      name: "Account Information",
      description: "Your name, email, and profile details",
      icon: "person-circle",
      color: "#1DB954",
    },
    {
      id: "2",
      name: "Order History",
      description: "All your past purchases and orders",
      icon: "receipt",
      color: "#3B82F6",
    },
    {
      id: "3",
      name: "Wishlist Items",
      description: "Products you've saved to your wishlist",
      icon: "heart",
      color: "#EF4444",
    },
    {
      id: "4",
      name: "Reviews & Ratings",
      description: "Your product reviews and ratings",
      icon: "star",
      color: "#FFD700",
    },
    {
      id: "5",
      name: "Addresses",
      description: "Your saved shipping addresses",
      icon: "location",
      color: "#F59E0B",
    },
  ];

  const handleDownload = () => {
    Alert.alert(
      "Download Your Data",
      "We'll prepare a copy of your data and send it to your email address. This may take a few minutes.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Continue",
          onPress: async () => {
            setIsDownloading(true);
            // Simulate download process
            setTimeout(() => {
              setIsDownloading(false);
              Alert.alert(
                "Request Received",
                `We'll send your data to ${user?.primaryEmailAddress?.emailAddress} within 24 hours.`
              );
            }, 2000);
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
          <Text className="text-white text-xl font-bold">
            Download Your Data
          </Text>
        </View>

        <ScrollView
          className="flex-1 px-4"
          showsVerticalScrollIndicator={false}
        >
          <View className="bg-surface-light/20 p-4 rounded-2xl mb-6 border border-white/5">
            <View className="flex-row items-center mb-2">
              <Ionicons name="cloud-download" size={20} color="#1DB954" />
              <Text className="text-white font-bold ml-2">Data Export</Text>
            </View>
            <Text className="text-gray-400 text-xs leading-5">
              Request a copy of your data. We'll compile all your information
              and send it to {user?.primaryEmailAddress?.emailAddress} in a
              downloadable format.
            </Text>
          </View>

          <Text className="text-white font-bold text-base mb-4">
            What's Included:
          </Text>

          {dataCategories.map((category) => (
            <View
              key={category.id}
              className="bg-surface p-4 rounded-2xl mb-3 border border-white/5 flex-row items-center"
            >
              <View
                className="w-12 h-12 rounded-full items-center justify-center mr-3"
                style={{ backgroundColor: `${category.color}20` }}
              >
                <Ionicons
                  name={category.icon as any}
                  size={24}
                  color={category.color}
                />
              </View>
              <View className="flex-1">
                <Text className="text-white font-bold mb-1">
                  {category.name}
                </Text>
                <Text className="text-gray-400 text-xs">
                  {category.description}
                </Text>
              </View>
              <Ionicons name="checkmark-circle" size={20} color="#1DB954" />
            </View>
          ))}

          <View className="bg-surface-light/20 p-4 rounded-2xl my-6 border border-white/5">
            <View className="flex-row items-center mb-2">
              <Ionicons name="time" size={18} color="#F59E0B" />
              <Text className="text-white font-bold ml-2">Processing Time</Text>
            </View>
            <Text className="text-gray-400 text-xs leading-5">
              Data compilation typically takes up to 24 hours. You'll receive an
              email with a download link once it's ready.
            </Text>
          </View>

          <TouchableOpacity
            onPress={handleDownload}
            disabled={isDownloading}
            className={`bg-primary w-full py-4 rounded-[20px] items-center justify-center shadow-lg shadow-primary/20 mb-6 ${
              isDownloading ? "opacity-50" : ""
            }`}
          >
            {isDownloading ? (
              <ActivityIndicator color="black" />
            ) : (
              <View className="flex-row items-center gap-2">
                <Ionicons name="download" size={20} color="#000" />
                <Text className="text-black text-lg font-bold">
                  Request Data Download
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeScreen>
  );
};

export default DownloadDataScreen;
