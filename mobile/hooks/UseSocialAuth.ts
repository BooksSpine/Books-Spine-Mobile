import { useSSO } from "@clerk/clerk-expo";
import { useState } from "react";
import { Alert } from "react-native";

const useSocialAuth = () => {
    const [LodingStrategy, setLodingStrategy] = useState<string | null>(null)
  const { startSSOFlow } = useSSO();

  const handleSocialAuth = async (
    strategy: "oauth_google" | "oauth_facebook" | "oauth_apple"
  ) => {
    setLodingStrategy(strategy);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });
      if (createdSessionId && setActive) {
        setActive({ session: createdSessionId });
      }
    } catch (error) {
      console.log("error in social auth", error);
      const provider =
        strategy === "oauth_google"
          ? "Google"
          : strategy === "oauth_facebook"
            ? "Facebook"
            : "Apple";
      Alert.alert(
        "Error",
        `Failed to sign in with ${provider} account. please try again`
      );
    } finally {
      setLodingStrategy(null);
    }
  };

  return { handleSocialAuth, LodingStrategy };
};

export default useSocialAuth;
