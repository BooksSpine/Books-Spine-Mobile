import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Share,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import SafeScreen from "@/components/SafeScreen";
import { collections } from "@/constant";
import ProductCard from "@/components/ProductCard";
import { Image } from "expo-image";

const CollectionDetails = () => {
  const { slug } = useLocalSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const collection = collections.find((c) => c.slug === slug);

  if (!collection) {
    return (
      <SafeScreen>
        <View className="flex-1 bg-background items-center justify-center p-6">
          <Ionicons name="alert-circle-outline" size={64} color="#666" />
          <Text className="text-text-primary text-xl font-bold mt-4">
            Collection Not Found
          </Text>
          <TouchableOpacity
            onPress={() => router.back()}
            className="mt-6 bg-primary px-8 py-3 rounded-full"
          >
            <Text className="text-black font-bold">Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeScreen>
    );
  }

  const filteredProducts = (collection.products || []).filter(
    (p: any) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleShare = async () => {
    try {
      const url = `https://books-spine.com/collection/${collection.slug}`;
      await Share.share({
        message: `Check out the ${collection.title} collection on Books Spine!\n${url}`,
        url: url, // iOS
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeScreen>
      <View className="flex-1 bg-background">
        {/* Header */}
        <View className="flex-row items-center justify-between py-4 px-6">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-surface p-3 rounded-full border border-white/5"
          >
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text
            className="text-text-primary text-lg font-bold"
            numberOfLines={1}
          >
            {collection.title}
          </Text>
          <TouchableOpacity
            onPress={handleShare}
            className="bg-surface p-3 rounded-full border border-white/5"
          >
            <Ionicons name="share-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Hero Banner */}
          <View className="px-2 mt-2">
            <View className="h-64 rounded-[24px] overflow-hidden relative border border-white/10">
              <Image
                source={collection.image}
                className="w-full h-full"
                contentFit="cover"
                transition={300}
              />
              <View className="absolute inset-0 bg-black/40 p-8 justify-end">
                <View className="bg-primary px-3 py-1 rounded-lg self-start mb-3">
                  <Text className="text-black font-bold text-xs">
                    COLLECTION
                  </Text>
                </View>
                <Text className="text-white text-3xl font-bold">
                  {collection.title}
                </Text>
                <Text className="text-gray-300 text-sm mt-2">
                  {collection.category} •{" "}
                  {collection.total_Products || collection.products?.length}{" "}
                  Books
                </Text>
              </View>
            </View>
          </View>

          {/* Details Section */}
          <View className="px-4 mt-4">
            <Text className="text-text-primary text-xl font-bold">
              About this Collection
            </Text>
            <Text className="text-text-secondary text-base leading-7 mt-4">
              {collection.description}
            </Text>

            {collection.discount_percentage && (
              <View className="mt-6 bg-primary/10 p-5 rounded-[24px] border border-primary/20 flex-row items-center gap-4">
                <View className="bg-primary p-3 rounded-2xl">
                  <Ionicons name="pricetag" size={24} color="#000" />
                </View>
                <View>
                  <Text className="text-primary font-bold text-lg">
                    Special Offer
                  </Text>
                  <Text className="text-text-secondary text-sm">
                    Get {collection.discount_percentage}% off on items in this
                    collection
                  </Text>
                </View>
              </View>
            )}
          </View>

          {/* Search within Collection */}
          <View className="px-4 mt-6">
            <View className="bg-surface flex-row items-center px-5 py-4 rounded-2xl border border-white/5">
              <Ionicons name="search" size={20} color="#666" />
              <TextInput
                placeholder={`Search in ${collection.title}...`}
                placeholderTextColor="#666"
                className="flex-1 ml-3 text-text-primary"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
          </View>

          {/* Product Grid */}
          <View className="px-6 mt-10 mb-20">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-text-primary text-xl font-bold">
                Featured Books
              </Text>
              <Text className="text-text-secondary text-sm">
                {filteredProducts.length} Results
              </Text>
            </View>

            <View className="flex-row flex-wrap justify-between">
              {filteredProducts.map((item: any) => (
                <View key={item.id} className="w-[48%] mb-6">
                  <ProductCard product={item} />
                </View>
              ))}

              {filteredProducts.length === 0 && (
                <View className="w-full items-center py-10">
                  <Text className="text-text-secondary">
                    No books match your search.
                  </Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeScreen>
  );
};

export default CollectionDetails;
