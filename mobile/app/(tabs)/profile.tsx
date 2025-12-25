import SafeScreen from "@/components/SafeScreen";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const Profile = () => {
  const { user } = useUser();
  const { signOut } = useAuth();
  const router = useRouter();

  const MENU_GRID = [
    {
      label: "Edit Profile",
      icon: "person-outline",
      color: "#3B82F6", // Blue
      bg: "rgba(59, 130, 246, 0.1)",
      route: "/profile/edit",
    },
    {
      label: "Orders",
      icon: "list-outline",
      color: "#10B981", // Green
      bg: "rgba(16, 185, 129, 0.1)",
      route: "/orders", // Placeholder route
    },
    {
      label: "Addresses",
      icon: "location-outline",
      color: "#F59E0B", // Amber
      bg: "rgba(245, 158, 11, 0.1)",
      route: "/addresses", // Placeholder route
    },
    {
      label: "Wishlist",
      icon: "heart-outline",
      color: "#EF4444", // Red
      bg: "rgba(239, 68, 68, 0.1)",
      route: "/wishlist",
    },
  ];

  const SETTINGS_LIST = [
    {
      label: "Notifications",
      icon: "notifications-outline",
      route: "/notifications",
    },
    {
      label: "Privacy & Security",
      icon: "shield-checkmark-outline",
      route: "/privacy",
    },
    {
      label: "Support & Chats",
      icon: "chatbubble-ellipses-outline",
      route: "/Support-&-Chats",
    },
    {
      label: "FAQ's",
      icon: "help-circle-outline",
      route: "/Faqs",
    },
  ];

  return (
    <SafeScreen>
      <ScrollView
        className="flex-1 bg-background px-4 pt-10"
        showsVerticalScrollIndicator={false}
      >
        {/* User Card */}
        <View className="bg-surface p-6 rounded-[24px] flex-row items-center mb-6 border border-white/5">
          <View className="relative">
            {user?.imageUrl ? (
              <Image
                source={{ uri: user.imageUrl }}
                className="w-16 h-16 rounded-full"
              />
            ) : (
              <View className="w-16 h-16 rounded-full bg-primary items-center justify-center">
                <Text className="text-black text-2xl font-bold">
                  {user?.firstName?.charAt(0) || "U"}
                </Text>
              </View>
            )}
            <View className="absolute -bottom-1 -right-1 bg-background rounded-full p-0.5">
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            </View>
          </View>
          <View className="ml-4 flex-1">
            <Text className="text-white text-xl font-bold">
              {user?.fullName || "Guest User"}
            </Text>
            <Text className="text-text-secondary text-sm">
              {user?.primaryEmailAddress?.emailAddress || "guest@example.com"}
            </Text>
          </View>
        </View>

        {/* Action Grid */}
        <View className="flex-row flex-wrap justify-between">
          {MENU_GRID.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              onPress={() => router.push(item.route as any)}
              className={`w-[48%] bg-surface p-5 rounded-[20px] items-center justify-center border border-white/5 ${
                index < 2 ? "mb-4" : ""
              }`}
              style={{ aspectRatio: 1.5 }}
            >
              <View
                className="w-12 h-12 rounded-2xl items-center justify-center mb-2"
                style={{ backgroundColor: item.bg }}
              >
                <Ionicons
                  name={item.icon as any}
                  size={24}
                  color={item.color}
                />
              </View>
              <Text className="text-white font-medium">{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Settings List */}
        <View className="">
          {SETTINGS_LIST.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              onPress={() => router.push(item.route as any)}
              className="bg-surface p-5 rounded-[20px] flex-row items-center justify-between mb-3 border border-white/5"
            >
              <View className="flex-row items-center gap-3">
                <Ionicons name={item.icon as any} size={22} color="#fff" />
                <Text className="text-white font-medium text-base">
                  {item.label}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Sign Out Button */}
        <TouchableOpacity
          onPress={() => signOut()}
          activeOpacity={0.8}
          className="w-full border border-red-500/30 bg-red-500/10 py-4 rounded-[20px] flex-row items-center justify-center mb-10"
        >
          <Ionicons name="log-out-outline" size={20} color="#EF4444" />
          <Text className="text-red-500 font-bold ml-2 text-base">
            Sign Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeScreen>
  );
};

export default Profile;
