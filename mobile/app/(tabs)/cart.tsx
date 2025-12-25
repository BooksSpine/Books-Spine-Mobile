import SafeScreen from "@/components/SafeScreen";
import { useStore } from "@/context/StoreContext";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const CartScreen = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } =
    useStore();
  const router = useRouter();

  if (cartItems.length === 0) {
    return (
      <SafeScreen>
        <View className="flex-1 bg-background items-center justify-center p-6">
          <View className="bg-surface p-6 rounded-full border border-white/5 mb-6">
            <Ionicons name="cart-outline" size={64} color="#666" />
          </View>
          <Text className="text-text-primary text-2xl font-bold mb-2">
            Your Cart is Empty
          </Text>
          <Text className="text-text-secondary text-center mb-8 px-8">
            Looks like you haven't added any books to your cart yet.
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/shop")}
            className="bg-primary px-8 py-4 rounded-full"
          >
            <Text className="text-black font-bold text-lg">Start Shopping</Text>
          </TouchableOpacity>
        </View>
      </SafeScreen>
    );
  }

  return (
    <SafeScreen>
      <View className="flex-1 bg-background">
        <View className="flex-row items-center justify-between px-6 py-4 border-b border-white/5">
          <Text className="text-text-primary text-2xl font-bold">My Cart</Text>
          <Text className="text-text-secondary font-medium">
            {cartCount} Items
          </Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 220 }}
          className="px-4 pt-4"
        >
          {cartItems.map((item) => (
            <View
              key={item.id}
              className="bg-surface mb-4 p-4 rounded-[24px] border border-white/5 flex-row gap-4"
            >
              {/* Product Image */}
              <View className="relative w-24 h-24 bg-white rounded-2xl overflow-hidden items-center justify-center p-2">
                {item.image ? (
                  <Image
                    source={item.image}
                    className="w-full h-full"
                    contentFit="contain"
                  />
                ) : (
                  <Ionicons name="book" size={32} color="#666" />
                )}
                {/* Quantity Badge on Image */}
                <View className="absolute top-1 right-1 bg-primary px-1.5 py-0.5 rounded-full z-10">
                  <Text className="text-white text-[10px] font-bold">
                    x{item.quantity}
                  </Text>
                </View>
              </View>

              <View className="flex-1 justify-between py-1">
                <View>
                  <Text
                    numberOfLines={1}
                    className="text-white font-bold text-lg mb-1"
                  >
                    {item.title}
                  </Text>
                  {(item.variant_title || item.variant_id) && (
                    <Text className="text-gray-400 text-xs mb-1">
                      {item.variant_title}
                    </Text>
                  )}
                  <View className="flex-row items-baseline gap-2">
                    <Text className="text-primary font-bold text-xl">
                      ${item.price}
                    </Text>
                    <Text className="text-gray-500 text-xs">
                      ${item.price} each
                    </Text>
                  </View>
                </View>

                {/* Actions Row */}
                <View className="flex-row items-center justify-between mt-2">
                  <View className="flex-row items-center gap-4">
                    <TouchableOpacity
                      onPress={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="px-2"
                    >
                      <Ionicons name="remove" size={18} color="#fff" />
                    </TouchableOpacity>

                    <Text className="text-white font-bold text-base">
                      {item.quantity}
                    </Text>

                    <TouchableOpacity
                      onPress={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-primary rounded-full items-center justify-center"
                    >
                      <Ionicons name="add" size={18} color="#000" />
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    onPress={() => removeFromCart(item.id)}
                    className="w-8 h-8 bg-red-500/20 rounded-full items-center justify-center"
                  >
                    <Ionicons name="trash-outline" size={16} color="#EF4444" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}

          {/* Order Summary */}
          <View className="bg-surface p-6 rounded-[24px] border border-white/5 mt-2 mb-4">
            <Text className="text-white text-lg font-bold mb-4">Summary</Text>

            <View className="flex-row justify-between mb-3">
              <Text className="text-gray-400">Subtotal</Text>
              <Text className="text-white font-medium">
                ${cartTotal.toFixed(2)}
              </Text>
            </View>

            <View className="flex-row justify-between mb-3">
              <Text className="text-gray-400">Shipping</Text>
              <Text className="text-white font-medium">$10.00</Text>
            </View>

            <View className="flex-row justify-between mb-4">
              <Text className="text-gray-400">Tax</Text>
              <Text className="text-white font-medium">$36.00</Text>
            </View>

            <View className="h-[1px] bg-white/10 mb-4" />

            <View className="flex-row justify-between items-center">
              <Text className="text-white font-bold text-lg">Total</Text>
              <Text className="text-primary font-bold text-2xl">
                ${(cartTotal + 10 + 36).toFixed(2)}
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* Checkout Footer */}
        <View className="absolute bottom-[100px] left-0 right-0 px-4 z-50">
          <View className="bg-surface rx-4 py-4 px-6 rounded-[24px] border border-white/10 flex-row items-center justify-between shadow-xl">
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 bg-primary/20 rounded-full items-center justify-center">
                <Ionicons name="cart" size={20} color="#1DB954" />
              </View>
              <View>
                <Text className="text-gray-400 text-xs">{cartCount} items</Text>
                <Text className="text-white font-bold text-lg">
                  ${(cartTotal + 10 + 36).toFixed(2)}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-primary px-6 py-3 rounded-[16px] flex-row items-center"
            >
              <Text className="text-black font-bold mr-2">Checkout</Text>
              <Ionicons name="arrow-forward" size={18} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeScreen>
  );
};

export default CartScreen;
