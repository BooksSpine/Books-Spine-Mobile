import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { notifications } from "@/constant";

interface NotificationModalProps {
  visible: boolean;
  onClose: () => void;
}

const NotificationModal = ({ visible, onClose }: NotificationModalProps) => {
  const router = useRouter();

  const handleViewAll = () => {
    onClose();
    router.push("/notifications");
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end">
        <TouchableWithoutFeedback onPress={onClose}>
          <View className="absolute inset-0 bg-black/10" />
        </TouchableWithoutFeedback>

        <View className="bg-surface w-full rounded-t-[32px] overflow-hidden border-t border-white/10 shadow-2xl">
          <BlurView intensity={20} className="p-6 pb-12">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-text-primary text-xl font-bold">
                Notifications
              </Text>
              <TouchableOpacity
                onPress={onClose}
                className="bg-surface-light p-2 rounded-full"
              >
                <Ionicons name="close" size={20} color="#fff" />
              </TouchableOpacity>
            </View>

            <ScrollView
              className="max-h-[500px]"
              showsVerticalScrollIndicator={false}
            >
              {notifications.slice(0, 3).map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.7}
                  className={`flex-row gap-4 p-4 rounded-2xl mb-3 ${
                    !item.read ? "bg-primary/5" : "bg-white/5"
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
              <TouchableOpacity
                onPress={handleViewAll}
                className="mt-4 py-3 items-center bg-surface-light rounded-2xl"
              >
                <Text className="text-primary text-base font-semibold">
                  View All Notifications
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </BlurView>
        </View>
      </View>
    </Modal>
  );
};

export default NotificationModal;
