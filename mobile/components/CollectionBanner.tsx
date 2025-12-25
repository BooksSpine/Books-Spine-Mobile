import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Image } from "expo-image";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

interface CollectionBannerProps {
  collections: any[];
}

const CollectionBanner = ({ collections }: CollectionBannerProps) => {
  const router = useRouter();

  return (
    <View className="my-4">
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
      >
        {collections.map((item) => (
          <TouchableOpacity
            key={item.collection_id}
            onPress={() =>
              router.push({
                pathname: "/collection/[slug]",
                params: { slug: item.slug },
              } as any)
            }
            className="px-2"
            style={{ width: SCREEN_WIDTH }}
            activeOpacity={0.9}
          >
            <View className="h-64 rounded-[10px] overflow-hidden bg-surface relative">
              <Image
                source={item.image}
                className="w-full h-full opacity-60"
                contentFit="cover"
                transition={300}
              />
              <View className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 justify-end">
                <View className="bg-primary/20 self-start px-3 py-1 rounded-full border border-primary/30 mb-3">
                  <Text className="text-primary text-[10px] font-bold uppercase tracking-widest">
                    {item.category}
                  </Text>
                </View>
                <Text className="text-white text-3xl font-bold leading-tight">
                  {item.title}
                </Text>
                <Text
                  className="text-gray-300 text-sm mt-2 font-medium"
                  numberOfLines={1}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Pagination dots mockup
      <View className="flex-row justify-center gap-2 mt-4">
        {collections.map((_, i) => (
          <View
            key={i}
            className={`h-1.5 rounded-full ${i === 0 ? "w-6 bg-primary" : "w-1.5 bg-white/20"}`}
          />
        ))}
      </View> */}
    </View>
  );
};

export default CollectionBanner;
