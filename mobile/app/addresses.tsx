import SafeScreen from "@/components/SafeScreen";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Define Address Type
interface Address {
  id: string;
  label: string;
  fullName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  isDefault: boolean;
}

const Addresses = () => {
  const router = useRouter();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    label: "",
    fullName: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    isDefault: false,
  });

  const resetForm = () => {
    setFormData({
      label: "",
      fullName: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      phone: "",
      isDefault: false,
    });
    setEditingId(null);
  };

  const handleSaveAddress = () => {
    // Validation
    if (
      !formData.label ||
      !formData.fullName ||
      !formData.street ||
      !formData.city ||
      !formData.state ||
      !formData.zipCode ||
      !formData.phone
    ) {
      Alert.alert("Missing Information", "Please fill in all fields.");
      return;
    }
    const newAddress: Address = {
      id: editingId || Math.random().toString(),
      ...formData,
    };

    if (formData.isDefault) {
      // Set others to non-default
      setAddresses((prev) =>
        prev.map((addr) => ({ ...addr, isDefault: false }))
      );
    } else if (addresses.length === 0) {
      // First address is always default
      newAddress.isDefault = true;
    }

    if (editingId) {
      setAddresses((prev) =>
        prev.map((addr) => (addr.id === editingId ? newAddress : addr))
      );
    } else {
      setAddresses((prev) => [...prev, newAddress]);
    }

    setIsModalVisible(false);
    resetForm();
  };

  const handleEdit = (address: Address) => {
    setFormData({
      label: address.label,
      fullName: address.fullName,
      street: address.street,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
      phone: address.phone,
      isDefault: address.isDefault,
    });
    setEditingId(address.id);
    setIsModalVisible(true);
  };

  const handleDelete = (id: string) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  return (
    <SafeScreen>
      <View className="flex-1 bg-background">
        {/* Header */}
        <View className="py-4 flex-row items-center border-b border-white/5 mb-4 px-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-surface p-2 rounded-full mr-4 border border-white/10"
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold">My Addresses</Text>
        </View>

        {addresses.length === 0 ? (
          // Empty State
          <View className="flex-1 items-center justify-center px-6">
            <View className="w-20 h-20 rounded-full border border-white/10 items-center justify-center mb-6">
              <Ionicons name="location-outline" size={40} color="#666" />
            </View>
            <Text className="text-white text-xl font-bold mb-2">
              No addresses yet
            </Text>
            <Text className="text-gray-400 text-center mb-8">
              Add your first delivery address
            </Text>
            <TouchableOpacity
              onPress={() => setIsModalVisible(true)}
              className="bg-primary px-8 py-3 rounded-full"
            >
              <Text className="text-black font-bold text-base">
                Add Address
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          // Address List
          <View className="flex-1">
            <ScrollView className="flex-1 px-4 pt-4">
              {addresses.map((address) => (
                <View
                  key={address.id}
                  className="bg-surface p-5 rounded-[24px] mb-4 border border-white/5"
                >
                  <View className="flex-row justify-between items-start mb-4">
                    <View className="flex-row items-center gap-3">
                      <View className="w-10 h-10 bg-surface-light rounded-full items-center justify-center">
                        <Ionicons name="location" size={20} color="#1DB954" />
                      </View>
                      <View>
                        <Text className="text-white font-bold text-lg">
                          {address.label}
                        </Text>
                      </View>
                    </View>
                    {address.isDefault && (
                      <View className="bg-primary px-3 py-1 rounded-full">
                        <Text className="text-black text-xs font-bold">
                          Default
                        </Text>
                      </View>
                    )}
                  </View>

                  <View className="pl-[52px]">
                    <Text className="text-white font-bold mb-1">
                      {address.fullName}
                    </Text>
                    <Text className="text-gray-400 text-sm mb-1">
                      {address.street}
                    </Text>
                    <Text className="text-gray-400 text-sm mb-1">
                      {address.city}, {address.state} {address.zipCode}
                    </Text>
                    <Text className="text-gray-400 text-sm mb-4">
                      {address.phone}
                    </Text>

                    <View className="flex-row gap-3">
                      <TouchableOpacity
                        onPress={() => handleEdit(address)}
                        className="flex-1 border border-primary/30 py-2.5 rounded-xl items-center bg-primary/10"
                      >
                        <Text className="text-primary font-bold">Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => handleDelete(address.id)}
                        className="flex-1 border border-red-500/30 py-2.5 rounded-xl items-center bg-red-500/10"
                      >
                        <Text className="text-red-500 font-bold">Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
              {/* Spacer for bottom button */}
              <View className="h-24" />
            </ScrollView>
            {/* Bottom Add Button */}
            <View className="absolute bottom-6 left-6 right-6">
              <TouchableOpacity
                onPress={() => {
                  resetForm();
                  setIsModalVisible(true);
                }}
                className="bg-primary w-full py-4 rounded-xl items-center justify-center shadow-lg shadow-primary/20"
              >
                <View className="flex-row items-center gap-2">
                  <Ionicons name="add-circle-outline" size={24} color="black" />
                  <Text className="text-black text-lg font-bold">
                    Add New Address
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Add/Edit Address Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1"
          >
            <View className="flex-1 bg-black/80 justify-end">
              <View className="bg-surface rounded-t-[32px] p-6 h-[85%] border-t border-white/10">
                <View className="flex-row justify-between items-center mb-6">
                  <Text className="text-white text-xl font-bold">
                    {editingId ? "Edit Address" : "Add New Address"}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setIsModalVisible(false);
                      resetForm();
                    }}
                  >
                    <Ionicons name="close" size={24} color="#fff" />
                  </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                  <View className="gap-4">
                    <View>
                      <Text className="text-white font-medium mb-2">Label</Text>
                      <TextInput
                        placeholder="e.g., Home, Work, Office"
                        placeholderTextColor="#666"
                        value={formData.label}
                        onChangeText={(text) =>
                          setFormData({ ...formData, label: text })
                        }
                        className="bg-background p-4 rounded-xl text-white border border-white/10"
                      />
                    </View>

                    <View>
                      <Text className="text-white font-medium mb-2">
                        Full Name
                      </Text>
                      <TextInput
                        placeholder="Enter your full name"
                        placeholderTextColor="#666"
                        value={formData.fullName}
                        onChangeText={(text) =>
                          setFormData({ ...formData, fullName: text })
                        }
                        className="bg-background p-4 rounded-xl text-white border border-white/10"
                      />
                    </View>

                    <View>
                      <Text className="text-white font-medium mb-2">
                        Street Address
                      </Text>
                      <TextInput
                        placeholder="Street address, apt/suite number"
                        placeholderTextColor="#666"
                        value={formData.street}
                        onChangeText={(text) =>
                          setFormData({ ...formData, street: text })
                        }
                        className="bg-background p-4 rounded-xl text-white border border-white/10"
                      />
                    </View>

                    <View>
                      <Text className="text-white font-medium mb-2">City</Text>
                      <TextInput
                        placeholder="e.g., New York"
                        placeholderTextColor="#666"
                        value={formData.city}
                        onChangeText={(text) =>
                          setFormData({ ...formData, city: text })
                        }
                        className="bg-background p-4 rounded-xl text-white border border-white/10"
                      />
                    </View>

                    <View className="flex-row gap-4">
                      <View className="flex-1">
                        <Text className="text-white font-medium mb-2">
                          State
                        </Text>
                        <TextInput
                          placeholder="e.g., NY"
                          placeholderTextColor="#666"
                          value={formData.state}
                          onChangeText={(text) =>
                            setFormData({ ...formData, state: text })
                          }
                          className="bg-background p-4 rounded-xl text-white border border-white/10"
                        />
                      </View>
                      <View className="flex-1">
                        <Text className="text-white font-medium mb-2">
                          ZIP Code
                        </Text>
                        <TextInput
                          placeholder="e.g., 10001"
                          placeholderTextColor="#666"
                          value={formData.zipCode}
                          onChangeText={(text) =>
                            setFormData({ ...formData, zipCode: text })
                          }
                          keyboardType="numeric"
                          className="bg-background p-4 rounded-xl text-white border border-white/10"
                        />
                      </View>
                    </View>

                    <View>
                      <Text className="text-white font-medium mb-2">
                        Phone Number
                      </Text>
                      <TextInput
                        placeholder="+1 (555) 123-4567"
                        placeholderTextColor="#666"
                        value={formData.phone}
                        onChangeText={(text) =>
                          setFormData({ ...formData, phone: text })
                        }
                        keyboardType="phone-pad"
                        className="bg-background p-4 rounded-xl text-white border border-white/10"
                      />
                    </View>

                    <View className="bg-background p-4 rounded-xl border border-white/10 flex-row justify-between items-center mt-2">
                      <Text className="text-white font-medium">
                        Set as default address
                      </Text>
                      <Switch
                        value={formData.isDefault}
                        onValueChange={(val) =>
                          setFormData({ ...formData, isDefault: val })
                        }
                        trackColor={{ false: "#3E3E3E", true: "#1DB954" }}
                        thumbColor={"#fff"}
                      />
                    </View>

                    <TouchableOpacity
                      onPress={handleSaveAddress}
                      className="bg-primary w-full py-4 rounded-xl items-center mt-4 mb-8"
                    >
                      <Text className="text-black font-bold text-lg">
                        Save Address
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>
      </View>
    </SafeScreen>
  );
};

export default Addresses;
