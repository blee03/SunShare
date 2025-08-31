import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { StatusBar, Text, TouchableOpacity } from 'react-native';

export default function TabLayout() {
  return (
    <>
      <StatusBar />
      <Tabs
        screenOptions={{
          headerTitle: () => <Text>SunShare</Text>,
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => console.log("Add Friend pressed")}
            >
              <Ionicons
                name="person-add-outline"
                size={24}
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
              />
            </TouchableOpacity>
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="global"
          options={{
            title: "World",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "globe-sharp" : "globe-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="upload"
          options={{
            title: "Upload",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "sunny-sharp" : "sunny-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            title: "Notifications",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "notifications-sharp" : "notifications-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "person-sharp" : "person-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
