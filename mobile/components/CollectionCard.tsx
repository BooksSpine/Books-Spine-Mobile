import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image } from "expo-image";

interface CollectionCardProps {
  collection: any;
}

const CollectionCard = ({ collection }: CollectionCardProps) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/collection/[slug]",
      params: { slug: collection.slug },
    } as any);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.9}
      className="bg-surface p-4 rounded-[24px] border border-white/5 mb-6 overflow-hidden"
    >
      <View className="relative h-48 rounded-[20px] overflow-hidden">
        <Image
          source={collection.image}
          className="w-full h-full"
          contentFit="cover"
          transition={300}
        />
        <View className="absolute top-3 right-3 bg-black/50 px-3 py-1.5 rounded-full border border-white/20">
          <Text className="text-white text-xs font-bold">
            {collection.total_Products || collection.products?.length || 0}{" "}
            Items
          </Text>
        </View>

        {collection.discount_percentage && (
          <View className="absolute bottom-3 left-3 bg-primary px-3 py-1 rounded-lg">
            <Text className="text-black font-bold text-xs">
              -{collection.discount_percentage}% OFF
            </Text>
          </View>
        )}
      </View>

      <View className="mt-4">
        <View className="flex-row justify-between items-center">
          <Text className="text-text-primary text-xl font-bold">
            {collection.title}
          </Text>
          <View className="bg-primary/10 px-3 py-1 rounded-full">
            <Text className="text-primary text-[10px] font-bold uppercase">
              {collection.category}
            </Text>
          </View>
        </View>
        <Text
          className="text-text-secondary text-sm mt-2 leading-5"
          numberOfLines={2}
        >
          {collection.description}
        </Text>

        <View className="flex-row items-center justify-between mt-4">
          <View className="flex-row items-center gap-2">
            <Text className="text-primary text-xl font-bold">
              {collection.discount_price || collection.price}
            </Text>
            {collection.discount_price && (
              <Text className="text-text-tertiary text-sm line-through">
                {collection.price}
              </Text>
            )}
          </View>
          <TouchableOpacity className="bg-white/10 p-2 rounded-xl">
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CollectionCard;
