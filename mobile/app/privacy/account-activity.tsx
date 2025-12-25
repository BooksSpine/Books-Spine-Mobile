import SafeScreen from "@/components/SafeScreen";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const AccountActivityScreen = () => {
  const router = useRouter();

  const activities = [
    {
      id: "1",
      device: "iPhone 13 Pro",
      location: "New York, USA",
      time: "2 hours ago",
      ip: "192.168.1.1",
      status: "Current Session",
      color: "#1DB954",
    },
    {
      id: "2",
      device: "MacBook Pro",
      location: "New York, USA",
      time: "1 day ago",
      ip: "192.168.1.2",
      status: "Active",
      color: "#1DB954",
    },
    {
      id: "3",
      device: "iPad Air",
      location: "Los Angeles, USA",
      time: "3 days ago",
      ip: "192.168.1.3",
      status: "Active",
      color: "#1DB954",
    },
    {
      id: "4",
      device: "Chrome Browser",
      location: "Unknown Location",
      time: "1 week ago",
      ip: "192.168.1.4",
      status: "Expired",
      color: "#666",
    },
  ];

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
          <Text className="text-white text-xl font-bold">Account Activity</Text>
        </View>

        <ScrollView
          className="flex-1 px-4"
          showsVerticalScrollIndicator={false}
        >
          <Text className="text-gray-400 text-sm mb-6">
            Review your recent login activity and active sessions
          </Text>

          {activities.map((activity) => (
            <View
              key={activity.id}
              className="bg-surface p-4 rounded-2xl mb-3 border border-white/5"
            >
              <View className="flex-row items-start justify-between mb-3">
                <View className="flex-1">
                  <View className="flex-row items-center gap-2 mb-1">
                    <Ionicons
                      name="phone-portrait"
                      size={16}
                      color={activity.color}
                    />
                    <Text className="text-white font-bold">
                      {activity.device}
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-2 mb-1">
                    <Ionicons name="location" size={14} color="#666" />
                    <Text className="text-gray-400 text-xs">
                      {activity.location}
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-2">
                    <Ionicons name="time" size={14} color="#666" />
                    <Text className="text-gray-400 text-xs">
                      {activity.time}
                    </Text>
                  </View>
                </View>
                <View
                  className="px-3 py-1 rounded-full"
                  style={{ backgroundColor: `${activity.color}20` }}
                >
                  <Text
                    className="text-xs font-bold"
                    style={{ color: activity.color }}
                  >
                    {activity.status}
                  </Text>
                </View>
              </View>
              <View className="h-px bg-white/5 my-2" />
              <Text className="text-gray-500 text-xs">IP: {activity.ip}</Text>
            </View>
          ))}

          <View className="bg-surface-light/20 p-4 rounded-2xl mt-2 mb-6 border border-white/5">
            <View className="flex-row items-center mb-2">
              <Ionicons name="shield-checkmark" size={18} color="#1DB954" />
              <Text className="text-white font-bold ml-2">Security Tip</Text>
            </View>
            <Text className="text-gray-400 text-xs leading-5">
              If you notice any suspicious activity, change your password
              immediately and enable two-factor authentication.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeScreen>
  );
};

export default AccountActivityScreen;
