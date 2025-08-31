import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

type Notification = {
  id: string;
  title: string;
  message: string;
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: "1", title: "Welcome!", message: "Thanks for joining SunShare." },
    { id: "2", title: "New Photo", message: "Alice shared a sunset near you." },
    { id: "3", title: "Reminder", message: "Check out the global feed for today's sunsets." },
  ]);

  const renderItem = ({ item }: { item: Notification }) => (
    <View style={styles.notification}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {notifications.length === 0 ? (
        <Text style={styles.empty}>No notifications</Text>
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  notification: {
    padding: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ccc",
  },
  title: { fontWeight: "bold", marginBottom: 4 },
  empty: { textAlign: "center", marginTop: 50, color: "#999" },
});
