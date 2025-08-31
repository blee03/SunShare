import { View, Text, StyleSheet, Image, FlatList, useColorScheme, Dimensions, TouchableOpacity } from "react-native";

const photosMock = Array.from({ length: 12 }).map((_, i) => ({
  id: i.toString(),
  uri: `https://picsum.photos/200/240?random=${i + 1}`, // h/w ~1.2
}));

export default function ProfilePage() {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  const user = {
    name: "Brian Lee",
    username: "@brianlee",
    avatar: "https://i.pravatar.cc/150?img=3",
    sunsets: 24,
    friends: 128,
    caption: "Chasing sunsets and sharing moments 🌅",
    photos: photosMock,
  };

  const numColumns = 3;
  const screenWidth = Dimensions.get("window").width;
  const spacing = 4;
  const imageWidth = (screenWidth - spacing * (numColumns + 1)) / numColumns;
  const imageHeight = imageWidth * 1.2;

  const renderPhoto = ({ item }: { item: typeof photosMock[0] }) => (
    <Image
      source={{ uri: item.uri }}
      style={{ width: imageWidth, height: imageHeight, margin: spacing / 2, borderRadius: 8 }}
    />
  );

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#111" : "#fff" }]}>
      {/* Header: avatar + info */}
      <View style={styles.header}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={[styles.name, { color: isDark ? "#fff" : "#111" }]}>{user.name}</Text>
          <Text style={[styles.username, { color: isDark ? "#ccc" : "#555" }]}>{user.username}</Text>
          <View style={styles.stats}>
            <Text style={[styles.stat, { color: isDark ? "#fff" : "#111" }]}>🌅 {user.sunsets} Sunsets</Text>
            <Text style={[styles.stat, { color: isDark ? "#fff" : "#111" }]}>👥 {user.friends} Friends</Text>
          </View>
        </View>
      </View>

      {/* Caption */}
      <Text style={[styles.caption, { color: isDark ? "#ccc" : "#555" }]}>{user.caption}</Text>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isDark ? "#333" : "#eee" }]}
          onPress={() => console.log("Edit Profile pressed")}
        >
          <Text style={{ color: isDark ? "#fff" : "#111", fontWeight: "bold" }}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: isDark ? "#333" : "#eee" }]}
          onPress={() => console.log("Add Friend pressed")}
        >
          <Text style={{ color: isDark ? "#fff" : "#111", fontWeight: "bold" }}>Add Friend</Text>
        </TouchableOpacity>
      </View>

      {/* Photo grid */}
      <FlatList
        data={user.photos}
        renderItem={renderPhoto}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16, paddingHorizontal: spacing / 2 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 16 }, // removed horizontal padding
  header: { flexDirection: "row", alignItems: "center", marginBottom: 12, paddingHorizontal: 16 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginRight: 16 },
  info: { flex: 1 },
  name: { fontSize: 22, fontWeight: "bold" },
  username: { fontSize: 16, marginBottom: 8 },
  stats: { flexDirection: "row", gap: 16 },
  stat: { fontSize: 14 },
  caption: { fontSize: 16, marginBottom: 12, paddingHorizontal: 16 },
  buttonsContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 16, paddingHorizontal: 16 },
  button: { flex: 1, paddingVertical: 10, marginHorizontal: 4, borderRadius: 8, alignItems: "center" },
});
