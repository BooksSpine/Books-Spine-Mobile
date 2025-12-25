import SafeScreen from "@/components/SafeScreen";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";

const PrivacyScreen = () => {
  const router = useRouter();
  const [twoFactor, setTwoFactor] = useState(false);
  const [biometric, setBiometric] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(true);
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [shareUsageData, setShareUsageData] = useState(false);

  const SecurityItem = ({
    icon,
    iconColor = "#1DB954",
    title,
    subtitle,
    onPress,
    showChevron = false,
    toggle,
    onToggle,
  }: any) => (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress && !onToggle}
      activeOpacity={0.7}
      className="bg-surface-light/30 p-4 rounded-2xl mb-3 flex-row items-center border border-white/5"
    >
      <View
        className="w-12 h-12 rounded-full items-center justify-center mr-4"
        style={{ backgroundColor: `${iconColor}20` }}
      >
        <Ionicons name={icon} size={24} color={iconColor} />
      </View>
      <View className="flex-1">
        <Text className="text-white font-bold text-base">{title}</Text>
        <Text className="text-gray-400 text-xs mt-0.5">{subtitle}</Text>
      </View>
      {toggle !== undefined ? (
        <Switch
          value={toggle}
          onValueChange={onToggle}
          trackColor={{ false: "#3E3E3E", true: "#1DB954" }}
          thumbColor="#fff"
        />
      ) : showChevron ? (
        <Ionicons name="chevron-forward" size={20} color="#666" />
      ) : null}
    </TouchableOpacity>
  );

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
          <Text className="text-white text-xl font-bold">
            Privacy & Security
          </Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          <View className="px-4">
            {/* Security Section */}
            <Text className="text-white font-bold text-lg mb-4">Security</Text>

            <SecurityItem
              icon="lock-closed-outline"
              title="Change Password"
              subtitle="Update your account password"
              showChevron
              onPress={() => router.push("/privacy/change-password")}
            />

            <SecurityItem
              icon="shield-checkmark-outline"
              title="Two-Factor Authentication"
              subtitle="Add an extra layer of security"
              toggle={twoFactor}
              onToggle={setTwoFactor}
            />

            <SecurityItem
              icon="finger-print-outline"
              title="Biometric Login"
              subtitle="Use Face ID or Touch ID"
              toggle={biometric}
              onToggle={setBiometric}
            />

            {/* Privacy Section */}
            <Text className="text-white font-bold text-lg mb-4 mt-6">
              Privacy
            </Text>

            <SecurityItem
              icon="notifications-outline"
              title="Push Notifications"
              subtitle="Receive push notifications"
              toggle={pushNotifs}
              onToggle={setPushNotifs}
            />

            <SecurityItem
              icon="mail-outline"
              title="Email Notifications"
              subtitle="Receive order updates via email"
              toggle={emailNotifs}
              onToggle={setEmailNotifs}
            />

            <SecurityItem
              icon="megaphone-outline"
              title="Marketing Emails"
              subtitle="Receive promotional emails"
              toggle={marketingEmails}
              onToggle={setMarketingEmails}
            />

            <SecurityItem
              icon="analytics-outline"
              title="Share Usage Data"
              subtitle="Help us improve the app"
              toggle={shareUsageData}
              onToggle={setShareUsageData}
            />

            {/* Account Section */}
            <Text className="text-white font-bold text-lg mb-4 mt-6">
              Account
            </Text>

            <SecurityItem
              icon="time-outline"
              title="Account Activity"
              subtitle="View recent login activity"
              showChevron
              onPress={() => router.push("/privacy/account-activity")}
            />

            <SecurityItem
              icon="phone-portrait-outline"
              title="Connected Devices"
              subtitle="Manage devices with access"
              showChevron
              onPress={() => router.push("/privacy/connected-devices")}
            />

            <SecurityItem
              icon="download-outline"
              title="Download Your Data"
              subtitle="Get a copy of your data"
              showChevron
              onPress={() => router.push("/privacy/download-data")}
            />

            <SecurityItem
              icon="trash-outline"
              iconColor="#EF4444"
              title="Delete Account"
              subtitle="Permanently delete your account"
              showChevron
              onPress={() => router.push("/privacy/delete-account")}
            />

            {/* Privacy Notice */}
            <View className="bg-surface-light/20 p-4 rounded-2xl mt-4 flex-row border border-white/5">
              <View className="w-10 h-10 rounded-full bg-primary/20 items-center justify-center mr-3">
                <Ionicons name="information" size={20} color="#1DB954" />
              </View>
              <Text className="text-gray-400 text-xs flex-1 leading-5">
                We take your privacy seriously. Your data is encrypted and
                stored securely. You can manage your privacy settings at any
                time.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeScreen>
  );
};

export default PrivacyScreen;
