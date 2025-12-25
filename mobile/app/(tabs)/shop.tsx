import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import SafeScreen from "@/components/SafeScreen";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import useProducts from "@/hooks/useProducts";
import { products } from "@/constant";
import ProductCard from "@/components/ProductCard";
import FilterDrawer from "@/components/FilterDrawer";
import { Image } from "expo-image";

const CATEGORIES = [
  { name: "All", icon: "grid-outline" as const },
  {
    name: "Electronics",
    image: require("./../../assets/images/electronics.png"),
  },
  {
    name: "Fashion",
    image: require("./../../assets/images/fashion.png"),
  },
  {
    name: "Sports",
    image: require("./../../assets/images/sports.png"),
  },
  {
    name: "Books",
    image: require("./../../assets/images/books.png"),
  },
];

const ShopScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Dynamic price range calculation
  const allPrices = products.flatMap(
    (p) => p.variants?.map((v) => v.price) || []
  );
  const minPriceBound = Math.min(...allPrices);
  const maxPriceBound = Math.max(...allPrices);

  const [filters, setFilters] = useState({
    minPrice: minPriceBound,
    maxPrice: maxPriceBound,
  });

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      product.categories.some(
        (cat) => cat.toLowerCase() === selectedCategory.toLowerCase()
      );

    const price = product.variants?.[0]?.price || 0;
    const matchesPrice = price >= filters.minPrice && price <= filters.maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <SafeScreen>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View className="px-6 pt-6">
          <View className="flex-row items-center justify-between mb-6">
            <View>
              <Text className="text-text-primary text-3xl font-bold tracking-tight">
                Shop
              </Text>
              <Text className="text-text-secondary text-sm mt-1">
                Browse all products
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => setIsFilterVisible(true)}
              className="bg-surface/50 p-3 rounded-full"
              activeOpacity={0.7}
            >
              <Ionicons name="options-outline" size={22} color={"#fff"} />
            </TouchableOpacity>
          </View>
        </View>

        {/* SEARCH BAR */}
        <View className="px-4">
          <View className="bg-surface flex-row items-center px-5 py-2 rounded-2xl">
            <Ionicons color={"#666"} size={22} name="search" />
            <TextInput
              placeholder="Search for products"
              placeholderTextColor={"#666"}
              className="flex-1 ml-3 text-base text-text-primary"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* CATEGORY FILTER */}
        <View className="mb-6 mt-4">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category.name;
              return (
                <TouchableOpacity
                  key={category.name}
                  onPress={() => setSelectedCategory(category.name)}
                  className={`mr-3 rounded-2xl size-20 overflow-hidden items-center justify-center ${isSelected ? "bg-primary" : "bg-surface"}`}
                >
                  {category.icon ? (
                    <Ionicons
                      name={category.icon}
                      size={36}
                      color={isSelected ? "#fff" : "#fff"}
                    />
                  ) : (
                    <Image
                      source={category.image}
                      className="size-12"
                      contentFit="cover"
                      transition={300}
                    />
                  )}
                  <Text
                    className={`text-xs font-medium ${
                      isSelected ? "text-text-primary" : "text-text-secondary"
                    }`}
                  >
                    {category.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* All Products Title */}
        <View className="px-6 mb-4">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-text-primary text-2xl font-bold tracking-tight">
                All Products
              </Text>
              <Text className="text-text-secondary text-xs mt-1">
                Explore the latest Products
              </Text>
            </View>
            <View>
              <Text className="text-text-primary/60 text-xs">
                {filteredProducts.length} items
              </Text>
            </View>
          </View>
        </View>

        {/* PRODUCT GRID */}
        <View className="px-4 flex-row flex-wrap justify-between">
          {filteredProducts.map((product) => (
            <View key={product.id} className="w-[48%]">
              <ProductCard product={product} />
            </View>
          ))}
          {filteredProducts.length === 0 && (
            <View className="w-full items-center justify-center py-20">
              <Ionicons name="search-outline" size={64} color="#333" />
              <Text className="text-text-secondary mt-4">
                No products found
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* FILTER DRAWER */}
      <FilterDrawer
        visible={isFilterVisible}
        onClose={() => setIsFilterVisible(false)}
        onApply={(newFilters) => setFilters(newFilters)}
        currentFilters={filters}
        minPriceBound={minPriceBound}
        maxPriceBound={maxPriceBound}
      />
    </SafeScreen>
  );
};

export default ShopScreen;
