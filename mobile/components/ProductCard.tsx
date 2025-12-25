import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image } from "expo-image";

interface ProductCardProps {
  product: any;
  onPress?: () => void;
}

const ProductCard = ({ product, onPress }: ProductCardProps) => {
  const router = useRouter();
  // Handle different data structures for price and image
  const rawPrice = product.price || product.variants?.[0]?.price || 0;
  const price = typeof rawPrice === "string" ? rawPrice : `$${rawPrice}`;

  const imageUrl = product.image || product.images?.[0]?.url;

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      console.log("Navigating to product:", product.id);
      router.push({
        pathname: "/product/[id]",
        params: { id: product.id },
      } as any);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      className="bg-surface/40 p-3 rounded-[12px] border border-white/5 mb-4"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 5,
      }}
    >
      <View className="relative">
        <View className="bg-surface-light rounded-[12px] overflow-hidden aspect-[4/5] items-center justify-center">
          {imageUrl ? (
            <Image
              source={
                typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl
              }
              className="w-full h-full"
              contentFit="cover"
              transition={300}
            />
          ) : (
            <Ionicons name="book-outline" size={40} color="#666" />
          )}
        </View>

        {/* Badge or Rating could go here */}
        <View className="absolute top-2 right-2 bg-primary px-2 py-1 rounded-full">
          <Text className="text-[10px] font-bold text-black">NEW</Text>
        </View>
      </View>

      <View className="mt-3 px-1">
        <Text className="text-text-primary font-bold text-sm" numberOfLines={1}>
          {product.title}
        </Text>
        <Text
          className="text-text-secondary text-[11px] mt-0.5"
          numberOfLines={1}
        >
          {product.author}
        </Text>

        <View className="flex-row items-center justify-between mt-2">
          <Text className="text-primary font-bold text-base">{price}</Text>
          <TouchableOpacity className="bg-white/10 p-1.5 rounded-full">
            <Ionicons name="add" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
