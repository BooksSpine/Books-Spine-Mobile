import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import SafeScreen from "@/components/SafeScreen";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import useProducts from "@/hooks/useProducts";
import { products } from "@/constant";

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
  console.log(products);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
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
                      resizeMode="cover"
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
        <View className="px-6 ">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-text-primary text-3xl font-bold tracking-tight">
                All Products
              </Text>
              <Text className="text-text-secondary text-sm mt-1">
                Explore the latest Products
              </Text>
            </View>
            <View>
              <Text className="text-text-primary/60">10 items</Text>
            </View>
          </View>
        </View>


      </ScrollView>
    </SafeScreen>
  );
};

export default ShopScreen;
