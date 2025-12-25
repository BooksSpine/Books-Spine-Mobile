import SafeScreen from "@/components/SafeScreen";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";

const ConnectedDevicesScreen = () => {
  const router = useRouter();

  const devices = [
    {
      id: "1",
      name: "iPhone 13 Pro",
      type: "Mobile",
      icon: "phone-portrait",
      lastActive: "Active now",
      location: "New York, USA",
      isCurrent: true,
    },
    {
      id: "2",
      name: "MacBook Pro",
      type: "Desktop",
      icon: "laptop",
      lastActive: "1 day ago",
      location: "New York, USA",
      isCurrent: false,
    },
    {
      id: "3",
      name: "iPad Air",
      type: "Tablet",
      icon: "tablet-portrait",
      lastActive: "3 days ago",
      location: "Los Angeles, USA",
      isCurrent: false,
    },
  ];

  const handleRemoveDevice = (deviceName: string) => {
    Alert.alert(
      "Remove Device",
      `Are you sure you want to remove "${deviceName}"? You'll need to sign in again on this device.`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => console.log("Device removed"),
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
            Connected Devices
          </Text>
        </View>

        <ScrollView
          className="flex-1 px-4"
          showsVerticalScrollIndicator={false}
        >
          <Text className="text-gray-400 text-sm mb-6">
            Manage devices that have access to your account
          </Text>

          {devices.map((device) => (
            <View
              key={device.id}
              className="bg-surface p-4 rounded-2xl mb-3 border border-white/5"
            >
              <View className="flex-row items-center gap-3 mb-3">
                <View className="w-12 h-12 rounded-full bg-primary/20 items-center justify-center">
                  <Ionicons
                    name={device.icon as any}
                    size={24}
                    color="#1DB954"
                  />
                </View>
                <View className="flex-1">
                  <View className="flex-row items-center gap-2">
                    <Text className="text-white font-bold">{device.name}</Text>
                    {device.isCurrent && (
                      <View className="bg-primary/20 px-2 py-0.5 rounded-full">
                        <Text className="text-primary text-[10px] font-bold">
                          THIS DEVICE
                        </Text>
                      </View>
                    )}
                  </View>
                  <Text className="text-gray-400 text-xs">{device.type}</Text>
                </View>
              </View>

              <View className="bg-background/50 p-3 rounded-xl mb-3">
                <View className="flex-row items-center gap-2 mb-1">
                  <Ionicons name="time-outline" size={14} color="#666" />
                  <Text className="text-gray-400 text-xs">
                    {device.lastActive}
                  </Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Ionicons name="location-outline" size={14} color="#666" />
                  <Text className="text-gray-400 text-xs">
                    {device.location}
                  </Text>
                </View>
              </View>

              {!device.isCurrent && (
                <TouchableOpacity
                  onPress={() => handleRemoveDevice(device.name)}
                  className="bg-red-500/10 border border-red-500/30 py-2.5 rounded-xl items-center"
                >
                  <Text className="text-red-500 font-bold text-sm">
                    Remove Device
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          ))}

          <View className="bg-surface-light/20 p-4 rounded-2xl mt-2 mb-6 border border-white/5">
            <View className="flex-row items-center mb-2">
              <Ionicons name="information-circle" size={18} color="#1DB954" />
              <Text className="text-white font-bold ml-2">Note</Text>
            </View>
            <Text className="text-gray-400 text-xs leading-5">
              Removing a device will sign you out and require you to log in
              again. You can't remove the current device you're using.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeScreen>
  );
};

export default ConnectedDevicesScreen;
