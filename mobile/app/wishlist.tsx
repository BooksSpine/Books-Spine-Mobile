import ProductCard from "@/components/ProductCard";
import SafeScreen from "@/components/SafeScreen";
import { useStore } from "@/context/StoreContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const WishlistScreen = () => {
  const { wishlist } = useStore();
  const router = useRouter();

  if (wishlist.length === 0) {
    return (
      <SafeScreen>
        <View className="flex-1 bg-background items-center justify-center p-6">
          <View className="bg-surface p-6 rounded-full border border-white/5 mb-6">
            <Ionicons name="heart-outline" size={64} color="#666" />
          </View>
          <Text className="text-text-primary text-2xl font-bold mb-2">
            Your Wishlist is Empty
          </Text>
          <Text className="text-text-secondary text-center mb-8 px-8">
            Save items you love to find them easily later.
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/shop")}
            className="bg-primary px-8 py-4 rounded-full"
          >
            <Text className="text-black font-bold text-lg">
              Start Exploring
            </Text>
          </TouchableOpacity>
        </View>
      </SafeScreen>
    );
  }

  return (
    <SafeScreen>
      <View className="flex-1 bg-background px-4">
        {/* Header */}
        <View className="py-4 flex-row items-center border-b border-white/5 mb-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-surface p-2 rounded-full mr-4 border border-white/10"
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text className="text-text-primary text-xl font-bold">
            My Wishlist
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex-row flex-wrap justify-between">
            {wishlist.map((item) => (
              <View key={item.id} className="w-[48%] mb-6">
                <ProductCard product={item} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeScreen>
  );
};

export default WishlistScreen;
