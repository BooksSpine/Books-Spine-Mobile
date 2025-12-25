import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import SafeScreen from "@/components/SafeScreen";
import { authors, products, collections } from "@/constant";
import ProductCard from "@/components/ProductCard";
import { Image } from "expo-image";

const AuthorPage = () => {
  const { name } = useLocalSearchParams();
  const router = useRouter();

  const author = authors.find((a) => a.name === name) || {
    name: name as string,
    bio: "Bio not available.",
    dob: "Unknown",
    location: "Global",
    followers: "0",
    rating: 0,
    image: `https://i.pravatar.cc/150?u=${name}`,
  };

  const authorProducts: any[] = [
    ...products.filter((p) => p.author === name),
    ...collections
      .flatMap((c) => c.products)
      .filter((p: any) => p.author === name),
  ];

  // Remove duplicates by id if any
  const uniqueAuthorProducts: any[] = Array.from(
    new Map(authorProducts.map((p) => [p.id, p])).values()
  );

  return (
    <SafeScreen>
      <View className="flex-1 bg-background">
        {/* Header */}
        <View className="flex-row items-center justify-between py-6 px-6">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-surface p-3 rounded-full border border-white/5"
          >
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text className="text-text-primary text-xl font-bold">
            Author Profile
          </Text>
          <View style={{ width: 48 }} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} className="px-6">
          {/* Profile Header */}
          <View className="items-center mt-4">
            <View className="relative">
              <Image
                source={author.image}
                className="w-32 h-32 rounded-full border-4 border-primary/20"
                contentFit="cover"
                transition={300}
              />
              <View className="absolute bottom-1 right-1 bg-primary p-1.5 rounded-full border-2 border-background">
                <Ionicons name="checkmark" size={12} color="#000" />
              </View>
            </View>

            <Text className="text-text-primary text-3xl font-bold mt-6 text-center">
              {author.name}
            </Text>
            <Text className="text-primary font-medium mt-1">
              Bestselling Author
            </Text>

            <View className="flex-row gap-8 mt-8 bg-surface/50 p-4 rounded-3xl border border-white/5">
              <View className="items-center">
                <Text className="text-text-primary text-xl font-bold">
                  {uniqueAuthorProducts.length}
                </Text>
                <Text className="text-text-secondary text-xs uppercase tracking-widest mt-1">
                  Books
                </Text>
              </View>
              <View className="w-[1px] h-10 bg-white/10" />
              <View className="items-center">
                <Text className="text-text-primary text-xl font-bold">
                  {author.followers}
                </Text>
                <Text className="text-text-secondary text-xs uppercase tracking-widest mt-1">
                  Followers
                </Text>
              </View>
              <View className="w-[1px] h-10 bg-white/10" />
              <View className="items-center">
                <Text className="text-text-primary text-xl font-bold">
                  {author.rating}
                </Text>
                <Text className="text-text-secondary text-xs uppercase tracking-widest mt-1">
                  Rating
                </Text>
              </View>
            </View>
          </View>

          {/* Details Section */}
          <View className="mt-12 bg-surface p-6 rounded-[32px] border border-white/5">
            <Text className="text-text-primary text-xl font-bold mb-6">
              Personal Details
            </Text>

            <View className="space-y-4">
              <View className="flex-row justify-between items-center border-b border-white/5 pb-4">
                <View className="flex-row items-center gap-3">
                  <View className="bg-primary/10 p-2 rounded-xl">
                    <Ionicons
                      name="calendar-outline"
                      size={20}
                      color="#1DB954"
                    />
                  </View>
                  <Text className="text-text-secondary text-base">
                    Date of Birth
                  </Text>
                </View>
                <Text className="text-text-primary font-semibold text-base">
                  {author.dob}
                </Text>
              </View>

              <View className="flex-row justify-between items-center pt-4">
                <View className="flex-row items-center gap-3">
                  <View className="bg-primary/10 p-2 rounded-xl">
                    <Ionicons
                      name="location-outline"
                      size={20}
                      color="#1DB954"
                    />
                  </View>
                  <Text className="text-text-secondary text-base">
                    Location
                  </Text>
                </View>
                <Text className="text-text-primary font-semibold text-base">
                  {author.location}
                </Text>
              </View>
            </View>
          </View>

          {/* About Section */}
          <View className="mt-10">
            <Text className="text-text-primary text-xl font-bold mb-4">
              About the Author
            </Text>
            <Text className="text-text-secondary text-base leading-7">
              {author.bio}
            </Text>
          </View>

          {/* Products Section */}
          <View className="mt-12 mb-12">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-text-primary text-xl font-bold">
                Books by {author.name.split(" ")[0]}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: "/(tabs)/collections",
                    params: { author: name },
                  } as any)
                }
              >
                <Text className="text-primary font-medium">View All</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row flex-wrap justify-between">
              {uniqueAuthorProducts.map((item) => (
                <View key={item.id} className="w-[48%] mb-6">
                  <ProductCard product={item} />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeScreen>
  );
};

export default AuthorPage;
