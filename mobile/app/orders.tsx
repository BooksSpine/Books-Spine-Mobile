import SafeScreen from "@/components/SafeScreen";
import { orders } from "@/constant";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const OrdersScreen = () => {
  const router = useRouter();
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleLeaveReview = (order: any) => {
    setSelectedOrder(order);
    setRating(0);
    setReviewText("");
    setIsReviewModalVisible(true);
  };

  const submitReview = () => {
    if (rating === 0) {
      Alert.alert("Error", "Please select a star rating.");
      return;
    }
    // Logic to submit review (mocked)
    console.log("Review Submitted", {
      orderId: selectedOrder?.id,
      rating,
      reviewText,
    });
    Alert.alert("Success", "Thank you for your review!");
    setIsReviewModalVisible(false);
  };

  const renderOrder = ({ item }: { item: any }) => (
    <View className="bg-surface rounded-[24px] mb-4 border border-white/5 overflow-hidden">
      {/* Header Section */}
      <View className="p-4 bg-surface-light/30 flex-row justify-between items-center">
        <View className="flex-1">
          <Text className="text-white font-bold text-base mb-1">
            {item.order_number}
          </Text>
          <Text className="text-gray-400 text-xs">
            Placed on {new Date(item.createdAt).toLocaleDateString()}
          </Text>
        </View>
        <View className="bg-primary/20 px-3 py-1.5 rounded-full">
          <Text className="text-primary text-xs font-bold uppercase">
            {item.status}
          </Text>
        </View>
      </View>

      <View className="p-4">
        {/* Order Items */}
        <View className="mb-4">
          <Text className="text-white font-bold text-sm mb-3">Items</Text>
          <View className="gap-3">
            {item.items.map((product: any, index: number) => (
              <View
                key={index}
                className="flex-row items-center gap-3 bg-background/50 p-3 rounded-xl"
              >
                <View className="w-14 h-14 bg-white rounded-lg overflow-hidden items-center justify-center p-1">
                  <Image
                    source={product.image}
                    className="w-full h-full"
                    contentFit="contain"
                  />
                </View>
                <View className="flex-1">
                  <Text
                    numberOfLines={1}
                    className="text-white font-semibold text-sm"
                  >
                    {product.title}
                  </Text>
                  <View className="flex-row items-center gap-2 mt-1">
                    <Text className="text-gray-400 text-xs">
                      Qty: {product.quantity}
                    </Text>
                    <View className="w-1 h-1 rounded-full bg-gray-600" />
                    <Text className="text-primary text-xs font-semibold">
                      ${product.price}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Delivery & Payment Info */}
        <View className="bg-background/30 p-3 rounded-xl mb-4">
          <View className="flex-row items-start gap-2 mb-2">
            <Ionicons name="location" size={14} color="#1DB954" />
            <View className="flex-1">
              <Text className="text-gray-400 text-[11px] mb-0.5">
                DELIVERY ADDRESS
              </Text>
              <Text className="text-white text-xs">
                {item.shipping?.address?.address1}
              </Text>
              <Text className="text-white text-xs">
                {item.shipping?.address?.city}, {item.shipping?.address?.state}{" "}
                {item.shipping?.address?.postal_code}
              </Text>
            </View>
          </View>

          <View className="h-px bg-white/5 my-2" />

          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <Ionicons name="card" size={14} color="#3B82F6" />
              <Text className="text-gray-400 text-xs">
                {item.payment?.method.replace("_", " ").toUpperCase()}
              </Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Ionicons name="cube" size={14} color="#F59E0B" />
              <Text className="text-gray-400 text-xs">
                {item.shipping?.method}
              </Text>
            </View>
          </View>
        </View>

        {/* Total & Action */}
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-gray-400 text-xs mb-1">Order Total</Text>
            <Text className="text-white font-bold text-2xl">
              ${item.pricing?.total}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => handleLeaveReview(item)}
            className="bg-primary px-6 py-3 rounded-full flex-row items-center gap-2"
          >
            <Ionicons name="star" size={16} color="#000" />
            <Text className="text-black font-bold text-sm">Rate Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeScreen>
      <View className="flex-1 bg-background">
        {/* Header */}
        <View className="py-4 flex-row items-center border-b border-white/5 mb-4 px-2">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-surface p-2 rounded-full mr-4 border border-white/10"
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold">My Orders</Text>
        </View>

        <FlatList
          data={orders}
          renderItem={renderOrder}
          keyExtractor={(item, index) => item.id + index} // index fallback as ids are duplicate in mockup
          contentContainerStyle={{ padding: 8 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View className="items-center justify-center py-20">
              <Ionicons name="receipt-outline" size={64} color="#666" />
              <Text className="text-gray-400 mt-4">No orders found.</Text>
            </View>
          }
        />

        {/* Review Modal */}
        <Modal
          visible={isReviewModalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setIsReviewModalVisible(false)}
        >
          <View className="flex-1 bg-black/80 justify-center items-center px-4">
            <View className="bg-surface rounded-[32px] p-6 w-full max-w-md border border-white/10">
              <View className="flex-row justify-between items-center mb-6">
                <Text className="text-white text-xl font-bold">
                  Write a Review
                </Text>
                <TouchableOpacity
                  onPress={() => setIsReviewModalVisible(false)}
                >
                  <Ionicons name="close" size={24} color="#fff" />
                </TouchableOpacity>
              </View>

              <Text className="text-gray-400 mb-6 text-center">
                How was your experience with Order {selectedOrder?.order_number}
                ?
              </Text>

              {/* Star Rating - Golden */}
              <View className="flex-row justify-center gap-3 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <TouchableOpacity
                    key={star}
                    onPress={() => setRating(star)}
                    activeOpacity={0.7}
                  >
                    <Ionicons
                      name={star <= rating ? "star" : "star-outline"}
                      size={48}
                      color={star <= rating ? "#FFD700" : "#666"}
                    />
                  </TouchableOpacity>
                ))}
              </View>

              <Text className="text-white font-bold mb-2">Your Review</Text>
              <TextInput
                multiline
                numberOfLines={4}
                value={reviewText}
                onChangeText={setReviewText}
                placeholder="Share your thoughts..."
                placeholderTextColor="#666"
                className="bg-background p-4 rounded-xl text-white border border-white/10 h-32 mb-6"
                style={{ textAlignVertical: "top" }}
              />

              <TouchableOpacity
                onPress={submitReview}
                className="bg-primary w-full py-4 rounded-xl items-center shadow-lg shadow-primary/20"
              >
                <Text className="text-black font-bold text-lg">
                  Submit Review
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeScreen>
  );
};

export default OrdersScreen;
