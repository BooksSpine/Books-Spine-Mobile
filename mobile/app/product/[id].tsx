import SafeScreen from "@/components/SafeScreen";
import { collections, products } from "@/constant";
import { useStore } from "@/context/StoreContext";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const product: any =
    products.find((p) => p.id === id) ||
    collections.flatMap((c) => c.products).find((p: any) => p.id === id);

  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const isWishlisted = isInWishlist(product?.id);

  const [selectedFormat, setSelectedFormat] = useState(
    product?.options?.find((o: any) => o.name === "Format")?.values[0] || ""
  );
  const [selectedSize, setSelectedSize] = useState(
    product?.options?.find((o: any) => o.name === "Size")?.values[0] || ""
  );
  const [qty, setQty] = useState(1);

  const activeVariant = product?.variants?.find((variant: any) => {
    const hasFormat = variant.option_values.find(
      (ov: any) => ov.name === "Format" && ov.value === selectedFormat
    );
    const hasSize = variant.option_values.find(
      (ov: any) => ov.name === "Size" && ov.value === selectedSize
    );
    return hasFormat && hasSize;
  });

  const price =
    activeVariant?.price ||
    product?.variants?.[0]?.price ||
    product?.price ||
    0;
  const pages =
    activeVariant?.pages ||
    product?.variants?.[0]?.pages ||
    product?.pages ||
    "--";

  if (!product) {
    return (
      <SafeScreen>
        <View className="flex-1 items-center justify-center p-6">
          <Text className="text-text-primary text-xl font-bold">
            Product not found
          </Text>
          <TouchableOpacity
            onPress={() => router.back()}
            className="mt-4 bg-primary px-6 py-3 rounded-full"
          >
            <Text className="text-black font-bold">Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeScreen>
    );
  }

  const rating = 4.8; // Mock rating
  const reviewsCount = 124; // Mock reviews

  const handleShare = async () => {
    try {
      const url = `https://books-spine.com/product/${product.id}`;
      await Share.share({
        message: `Check out ${product.title} by ${product.author} on Books Spine!\n${url}`,
        url: url, // iOS
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeScreen>
      <View className="flex-1 bg-background relative">
        {/* Header Navigation */}
        <View className="absolute top-4 left-0 right-0 z-10 px-6 flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-surface/80 p-3 rounded-full border border-white/10"
          >
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <View className="flex-row gap-2">
            <TouchableOpacity
              onPress={handleShare}
              className="bg-surface/80 p-3 rounded-full border border-white/10"
            >
              <Ionicons name="share-outline" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-surface/80 p-3 rounded-full border border-white/10">
              <Ionicons
                name={isWishlisted ? "heart" : "heart-outline"}
                size={24}
                color={isWishlisted ? "#E11D48" : "#fff"}
                onPress={() => toggleWishlist(product)}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          {/* Main Image */}
          <View className="w-full aspect-square bg-surface-light items-center justify-center pt-10">
            {product.images?.[0]?.url || product.image ? (
              <Image
                source={
                  typeof (product.images?.[0]?.url || product.image) ===
                  "string"
                    ? { uri: product.images?.[0]?.url || product.image }
                    : product.images?.[0]?.url || product.image
                }
                className="w-[80%] h-[80%]"
                contentFit="contain"
                transition={300}
              />
            ) : (
              <Ionicons name="book-outline" size={120} color="#666" />
            )}
          </View>

          {/* Details Content */}
          <View className="px-6 -mt-10 bg-background rounded-t-[40px] pt-8">
            <View className="flex-row items-center justify-between">
              <View className="flex-1 mr-4">
                <Text className="text-text-primary text-3xl font-bold leading-tight">
                  {product.title}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    router.push({
                      pathname: "/author/[name]",
                      params: { name: product.author },
                    } as any)
                  }
                  activeOpacity={0.7}
                >
                  <Text className="text-text-primary text-lg mt-1 font-medium ">
                    by{" "}
                    <Text className="text-primary underline decoration-primary/30">
                      {product.author}
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="items-end">
                <View className="bg-primary/20 px-4 py-2 rounded-2xl border border-primary/30">
                  <Text className="text-primary text-2xl font-bold">
                    {typeof price === "number" ? `$${price}` : price}
                  </Text>
                </View>
                {activeVariant?.compare_at_price &&
                  activeVariant.compare_at_price > price && (
                    <Text className="text-text-tertiary text-sm line-through mt-1">
                      ${activeVariant.compare_at_price}
                    </Text>
                  )}
              </View>
            </View>

            {/* Rating */}
            <View className="flex-row items-center mt-4 gap-2">
              <View className="flex-row items-center bg-surface-light px-3 py-1.5 rounded-full border border-white/5">
                <Ionicons name="star" size={16} color="#FBBF24" />
                <Text className="text-text-primary font-bold ml-1">
                  {rating}
                </Text>
              </View>
              <Text className="text-text-secondary ml-1">
                ({reviewsCount} Reviews)
              </Text>
            </View>

            {/* Description */}
            <View className="mt-8">
              <Text className="text-text-primary text-xl font-bold mb-3">
                Overview
              </Text>
              <Text className="text-text-secondary text-base leading-6">
                {product.description}
              </Text>
            </View>

            {/* Options Selection */}
            {product.options &&
              product.options.map((option: any) => (
                <View key={option.id} className="mt-8">
                  <Text className="text-text-primary text-base font-bold mb-4">
                    {option.name}
                  </Text>
                  <View className="flex-row flex-wrap gap-3">
                    {option.values.map((val: string) => {
                      const isSelected =
                        option.name === "Format"
                          ? selectedFormat === val
                          : selectedSize === val;
                      return (
                        <TouchableOpacity
                          key={val}
                          onPress={() =>
                            option.name === "Format"
                              ? setSelectedFormat(val)
                              : setSelectedSize(val)
                          }
                          className={`px-5 py-2.5 rounded-2xl border ${
                            isSelected
                              ? "bg-primary border-primary"
                              : "bg-surface border-white/5"
                          }`}
                        >
                          <Text
                            className={`font-bold text-sm ${
                              isSelected ? "text-black" : "text-text-secondary"
                            }`}
                          >
                            {val}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              ))}

            {/* Specifications Section */}
            <View className="mt-10 bg-surface-light/30 p-6 rounded-[32px] border border-white/5">
              <Text className="text-text-primary text-xl font-bold mb-5">
                Specifications
              </Text>

              <View className="gap-y-4">
                <View className="flex-row justify-between items-center border-b border-white/5 pb-4">
                  <Text className="text-text-secondary">Publisher</Text>
                  <Text className="text-text-primary font-semibold">
                    {product.publisher}
                  </Text>
                </View>
                <View className="flex-row justify-between items-center border-b border-white/5 pb-4">
                  <Text className="text-text-secondary">ISBN</Text>
                  <Text className="text-text-primary font-semibold">
                    {product.isbn}
                  </Text>
                </View>
                <View className="flex-row justify-between items-center border-b border-white/5 pb-4">
                  <Text className="text-text-secondary">Language</Text>
                  <Text className="text-text-primary font-semibold">
                    {product.language}
                  </Text>
                </View>
                <View className="flex-row justify-between items-center border-b border-white/5 pb-4">
                  <Text className="text-text-secondary">Total Pages</Text>
                  <Text className="text-text-primary font-semibold">
                    {pages}
                  </Text>
                </View>
                <View className="flex-row justify-between items-center border-b border-white/5 pb-4">
                  <Text className="text-text-secondary">SKU</Text>
                  <Text className="text-text-primary font-semibold">
                    {activeVariant?.sku || "--"}
                  </Text>
                </View>
                <View className="flex-row justify-between items-center border-b border-white/5 pb-4">
                  <Text className="text-text-secondary">Weight</Text>
                  <Text className="text-text-primary font-semibold">
                    {activeVariant?.package?.weight}{" "}
                    {activeVariant?.package?.weight_unit}
                  </Text>
                </View>
                {activeVariant?.package?.dimensions && (
                  <View className="flex-row justify-between items-center border-b border-white/5 pb-4">
                    <Text className="text-text-secondary">Dimensions</Text>
                    <Text className="text-text-primary font-semibold">
                      {activeVariant.package.dimensions.length}x
                      {activeVariant.package.dimensions.width}x
                      {activeVariant.package.dimensions.height}{" "}
                      {activeVariant.package.dimension_unit}
                    </Text>
                  </View>
                )}
              </View>
            </View>

            {/* Tags */}
            {product.tags && (
              <View className="mt-8">
                <Text className="text-text-primary text-lg font-bold mb-3">
                  Tags
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  {product.tags.map((tag: string) => (
                    <View
                      key={tag}
                      className="bg-white/5 px-4 py-2 rounded-full border border-white/10"
                    >
                      <Text className="text-text-secondary text-sm">
                        #{tag}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
            {/* Quantity Selector */}
            <View className="mt-6 flex-row items-center gap-4">
              <Text className="text-text-primary text-lg font-bold">
                Quantity
              </Text>
              <View className="flex-row items-center bg-surface-light rounded-2xl border border-white/10">
                <TouchableOpacity
                  onPress={() => setQty((prev) => Math.max(1, prev - 1))}
                  className="w-12 h-12 items-center justify-center border-r border-white/10"
                >
                  <Ionicons
                    name="remove"
                    size={20}
                    color={qty > 1 ? "#fff" : "#666"}
                  />
                </TouchableOpacity>
                <Text className="text-text-primary font-bold w-12 text-center text-lg">
                  {qty}
                </Text>
                <TouchableOpacity
                  onPress={() => setQty((prev) => Math.min(10, prev + 1))}
                  className="w-12 h-12 items-center justify-center border-l border-white/10"
                >
                  <Ionicons
                    name="add"
                    size={20}
                    color={qty < 10 ? "#fff" : "#666"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Cart Button */}
        <View className="absolute bottom-0 left-0 right-0 bg-background/80 px-6 pt-4 pb-10 border-t border-white/5">
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              addToCart({
                id: activeVariant?.id || product.id,
                product_id: product.id,
                title: product.title,
                price: price as number,
                quantity: qty,
                image: product.image || product.images?.[0]?.url,
                variant_id: activeVariant?.id,
                variant_title:
                  selectedFormat && selectedSize
                    ? `${selectedFormat} / ${selectedSize}`
                    : "",
              });
              router.push("/(tabs)/cart");
            }}
            className="bg-primary w-full py-5 rounded-[24px] flex-row items-center justify-center shadow-xl shadow-primary/40"
          >
            <Ionicons name="cart-outline" size={24} color="#000" />
            <Text className="text-black text-lg font-bold ml-3">
              Add to Cart — ${(price * qty).toFixed(2)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeScreen>
  );
};

export default ProductDetails;
