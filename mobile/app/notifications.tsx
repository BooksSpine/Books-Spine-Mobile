import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import SafeScreen from "@/components/SafeScreen";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { notifications } from "@/constant";

const NotificationsScreen = () => {
  const router = useRouter();

  return (
    <SafeScreen>
      <View className="flex-1 px-4">
        {/* Header */}
        <View className="py-4 flex-row items-center border-b border-white/5 mb-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-surface p-2 rounded-full mr-4 border border-white/10"
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text className="text-text-primary text-xl font-bold">
            All Notifications
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {notifications.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.7}
              className={`flex-row gap-4 p-4 rounded-2xl mb-3 bg-surface border border-white/5 ${
                !item.read ? "bg-surface-light/50" : ""
              }`}
            >
              <View
                className="w-12 h-12 rounded-full items-center justify-center"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <Ionicons
                  name={item.icon as any}
                  size={24}
                  color={item.color}
                />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-start">
                  <Text className="text-text-primary font-bold text-base flex-1 mr-2">
                    {item.title}
                  </Text>
                  <Text className="text-text-tertiary text-xs mt-1">
                    {item.time}
                  </Text>
                </View>
                <Text className="text-text-secondary text-sm mt-1 leading-5">
                  {item.message}
                </Text>
              </View>
              {!item.read && (
                <View className="w-2.5 h-2.5 rounded-full bg-primary mt-2" />
              )}
            </TouchableOpacity>
          ))}
          <View className="h-20" />
        </ScrollView>
      </View>
    </SafeScreen>
  );
};

export default NotificationsScreen;
