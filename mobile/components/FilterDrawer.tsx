import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

interface FilterDrawerProps {
  visible: boolean;
  onClose: () => void;
  onApply: (filters: any) => void;
  currentFilters: any;
  minPriceBound: number;
  maxPriceBound: number;
}

const CATEGORIES = [
  "Novels",
  "Science",
  "Action",
  "Sad",
  "Romance",
  "Self Love",
  "Others",
];

const FilterDrawer = ({
  visible,
  onClose,
  onApply,
  currentFilters,
  minPriceBound,
  maxPriceBound,
}: FilterDrawerProps) => {
  const [selectedCategory, setSelectedCategory] = useState(
    currentFilters.category || "Novels"
  );
  const [selectedRating, setSelectedRating] = useState(
    currentFilters.rating || 4
  );

  const [minPrice, setMinPrice] = useState(
    currentFilters.minPrice || minPriceBound
  );
  const [maxPrice, setMaxPrice] = useState(
    currentFilters.maxPrice || maxPriceBound
  );

  const handleApply = () => {
    onApply({
      ...currentFilters,
      category: selectedCategory,
      rating: selectedRating,
      minPrice,
      maxPrice,
    });
    onClose();
  };

  const handleReset = () => {
    setSelectedCategory("Novels");
    setSelectedRating(4);
    setMinPrice(minPriceBound);
    setMaxPrice(maxPriceBound);
    onApply({
      category: "Novels",
      rating: 4,
      minPrice: minPriceBound,
      maxPrice: maxPriceBound,
    });
  };

  const renderStars = (count: number) => {
    return (
      <View className="flex-row items-center gap-0.5">
        {[...Array(count)].map((_, i) => (
          <Ionicons key={i} name="star" size={12} color="#FBBF24" />
        ))}
      </View>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end">
        {/* Backdrop */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={onClose}
          className="absolute inset-0 bg-black/60"
        />

        {/* Content */}
        <View className="bg-background rounded-t-[48px] px-6 pt-6 pb-12 shadow-2xl border-t border-white/5">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-8">
            <TouchableOpacity onPress={onClose} className="p-1">
              <Ionicons name="close" size={28} color="#fff" />
            </TouchableOpacity>
            <Text className="text-text-primary text-2xl font-bold">Filter</Text>
            <TouchableOpacity onPress={handleReset}>
              <Text className="text-primary font-semibold text-base">
                Reset Filters
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Categories */}
            <View className="mb-8">
              <Text className="text-text-primary text-xl font-bold mb-4">
                Categories
              </Text>
              <View className="flex-row flex-wrap gap-2">
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <TouchableOpacity
                      key={cat}
                      onPress={() => setSelectedCategory(cat)}
                      className={`px-6 py-3 rounded-full border ${
                        isSelected
                          ? "bg-primary border-primary"
                          : "bg-surface border-white/10"
                      }`}
                    >
                      <Text
                        className={`font-semibold ${
                          isSelected ? "text-black" : "text-text-secondary"
                        }`}
                      >
                        {cat}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* Price section */}
            <View className="mb-8">
              <Text className="text-text-primary text-xl font-bold mb-4">
                Price Range
              </Text>

              <View className="flex-row items-center justify-between mb-2">
                <View className="bg-surface p-3 rounded-2xl flex-1 mr-3 border border-white/5 items-center">
                  <Text className="text-text-tertiary text-[10px] uppercase font-bold mb-1">
                    Min Price
                  </Text>
                  <View className="flex-row items-center gap-4">
                    <TouchableOpacity
                      onPress={() =>
                        setMinPrice(Math.max(minPriceBound, minPrice - 5))
                      }
                    >
                      <Ionicons
                        name="remove-circle-outline"
                        size={20}
                        color="#1DB954"
                      />
                    </TouchableOpacity>
                    <Text className="text-text-primary font-bold text-lg">
                      ${minPrice}
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        setMinPrice(Math.min(maxPrice, minPrice + 5))
                      }
                    >
                      <Ionicons
                        name="add-circle-outline"
                        size={20}
                        color="#1DB954"
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View className="bg-surface p-3 rounded-2xl flex-1 border border-white/5 items-center">
                  <Text className="text-text-tertiary text-[10px] uppercase font-bold mb-1">
                    Max Price
                  </Text>
                  <View className="flex-row items-center gap-4">
                    <TouchableOpacity
                      onPress={() =>
                        setMaxPrice(Math.max(minPrice, maxPrice - 5))
                      }
                    >
                      <Ionicons
                        name="remove-circle-outline"
                        size={20}
                        color="#1DB954"
                      />
                    </TouchableOpacity>
                    <Text className="text-text-primary font-bold text-lg">
                      ${maxPrice}
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        setMaxPrice(Math.min(maxPriceBound, maxPrice + 5))
                      }
                    >
                      <Ionicons
                        name="add-circle-outline"
                        size={20}
                        color="#1DB954"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View className="relative h-6 justify-center mt-4">
                {/* Track */}
                <View className="h-1.5 w-full bg-surface-light rounded-full" />
                {/* Dynamic Range Indicator */}
                <View
                  className="absolute h-1.5 bg-primary rounded-full"
                  style={{
                    left: `${((minPrice - minPriceBound) / (maxPriceBound - minPriceBound)) * 100}%`,
                    right: `${100 - ((maxPrice - minPriceBound) / (maxPriceBound - minPriceBound)) * 100}%`,
                  }}
                />
              </View>
            </View>

            {/* Star Rating */}
            <View className="mb-10">
              <Text className="text-text-primary text-xl font-bold mb-4">
                Star Rating
              </Text>
              <View className="flex-row flex-wrap gap-2">
                {[1, 2, 3, 4, 5].map((rating) => {
                  const isSelected = selectedRating === rating;
                  return (
                    <TouchableOpacity
                      key={rating}
                      onPress={() => setSelectedRating(rating)}
                      className={`px-4 py-2.5 rounded-full border ${
                        isSelected
                          ? "bg-primary/10 border-primary"
                          : "bg-surface border-white/10"
                      } items-center justify-center`}
                      style={isSelected ? { borderWidth: 2 } : {}}
                    >
                      {renderStars(rating)}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </ScrollView>

          {/* Apply Button */}
          <TouchableOpacity
            onPress={handleApply}
            activeOpacity={0.9}
            className="bg-primary w-full py-4 rounded-3xl items-center shadow-lg shadow-primary/20"
          >
            <Text className="text-black text-lg font-bold">Apply Filters</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FilterDrawer;
