import { Tabs } from "expo-router";
import { useColorScheme, TouchableOpacity, Text, View } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons"; // icons for hamburger / add friend

// Gradient header text
function GradientText({ text }: { text: string }) {
  return (
    <MaskedView
      maskElement={
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {text}
        </Text>
      }
    >
      <LinearGradient
        colors={["#FF5F6D", "#FFC371"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 }}
      />
    </MaskedView>
  );
}

export default function TabLayout() {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />

      <Tabs
        screenOptions={{
          headerTitle: () => <GradientText text="SunShare" />,
          headerStyle: { backgroundColor: isDark ? "#111" : "#fff" },
          headerTintColor: isDark ? "#fff" : "#111",
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => console.log("Add Friend pressed")}
            >
              <Ionicons
                name="person-add-outline"
                size={24}
                color={isDark ? "#fff" : "#111"}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => console.log("Open Settings pressed")}
            >
              <Ionicons
                name="menu"
                size={28}
                color={isDark ? "#fff" : "#111"}
              />
            </TouchableOpacity>
          ),
        }}
      >
        {/* Tab screens */}
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        <Tabs.Screen name="camera" options={{ title: "Camera" }} />
        <Tabs.Screen name="notifications" options={{ title: "Notifications" }} />
      </Tabs>
    </>
  );
}
