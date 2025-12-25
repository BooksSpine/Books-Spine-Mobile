import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import SafeScreen from "@/components/SafeScreen";
import { Ionicons } from "@expo/vector-icons";
import { collections } from "@/constant";
import CollectionBanner from "@/components/CollectionBanner";
import CollectionCard from "@/components/CollectionCard";
import { Image } from "expo-image";
import NotificationModal from "@/components/NotificationModal";

const COLECTION_CATEGORIES = [
  "All",
  "Romance",
  "Science",
  "Novels",
  "Thriller",
  "Art",
];

const CollectionsScreen = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const filteredCollections = collections.filter((c) => {
    const matchesCategory =
      activeCategory === "All" || c.category === activeCategory;
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredCollections = collections.slice(0, 3);
  const bestCollections = collections.filter((c) => c.total_Products > 5);
  const newArrivals = collections.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <SafeScreen>
      <View className="flex-1">
        {/* Header */}
        <View className="px-6 py-4 flex-row justify-between items-center">
          <View>
            <Text className="text-text-primary text-3xl font-bold tracking-tight">
              Our Collections
            </Text>
            <Text className="text-text-secondary text-sm">
              Curated stories just for you
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setIsNotificationVisible(true)}
            className="bg-surface p-3 rounded-full border border-white/5"
          >
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Banner Slider */}
          <CollectionBanner collections={featuredCollections} />
          {/* Search Bar */}
          <View className="px-2 mt-2">
            <View className="bg-surface-light flex-row items-center px-5 py-4 rounded-[24px] border border-white/5">
              <Ionicons name="search" size={20} color="#666" />
              <TextInput
                placeholder="Search collections..."
                placeholderTextColor="#666"
                className="flex-1 ml-3 text-text-primary font-medium"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
          </View>

          {/* Category Filters */}
          <View className="mt-4 mb-2">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 12, gap: 12 }}
            >
              {COLECTION_CATEGORIES.map((cat) => (
                <TouchableOpacity
                  key={cat}
                  onPress={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-full border ${
                    activeCategory === cat
                      ? "bg-primary border-primary"
                      : "bg-surface border-white/5"
                  }`}
                >
                  <Text
                    className={`font-bold text-xs uppercase tracking-widest ${
                      activeCategory === cat
                        ? "text-black"
                        : "text-text-secondary"
                    }`}
                  >
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          {!searchQuery && (
            <>
              {/* New Arrivals Section */}
              <View className="mt-4 mb-4">
                <View className="px-4 flex-row justify-between items-center mb-6">
                  <Text className="text-text-primary text-xl font-bold">
                    New Arrivals
                  </Text>
                  <Text className="text-primary font-medium">Explore</Text>
                </View>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ paddingHorizontal: 12, gap: 12 }}
                >
                  {newArrivals.map((col) => (
                    <TouchableOpacity
                      key={`${col.collection_id}-arrival`}
                      className="w-64"
                      activeOpacity={0.8}
                    >
                      <View className="h-40 bg-surface rounded-[16px] overflow-hidden border border-white/5">
                        <Image
                          source={col.image}
                          className="w-full h-full opacity-80"
                        />
                        <View className="absolute bottom-4 left-4">
                          <Text className="text-white font-bold text-lg">
                            {col.title}
                          </Text>
                          <Text className="text-gray-400 text-xs">
                            {col.total_Products} Books
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </>
          )}

          {/* Filtered Collections List */}
          <View className="px-4 mt-4 mb-20">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-text-primary text-xl font-bold">
                {activeCategory === "All"
                  ? "Best Collections"
                  : `${activeCategory} Collections`}
              </Text>
              <Text className="text-primary font-medium">See All</Text>
            </View>

            {filteredCollections.length > 0 ? (
              filteredCollections.map((col) => (
                <CollectionCard key={col.collection_id} collection={col} />
              ))
            ) : (
              <View className="items-center py-20">
                <Ionicons name="file-tray-outline" size={64} color="#333" />
                <Text className="text-text-secondary mt-4 font-medium">
                  No collections found
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
        <NotificationModal
          visible={isNotificationVisible}
          onClose={() => setIsNotificationVisible(false)}
        />
      </View>
    </SafeScreen>
  );
};

export default CollectionsScreen;
