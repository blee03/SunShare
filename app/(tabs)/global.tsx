import React, { useState } from 'react';
import { FlatList, ImageSourcePropType, StyleSheet, View, Image, Dimensions, TextInput } from 'react-native';

type Post = {
  id: string;
  imgSource: ImageSourcePropType;
};

const initialPosts: Post[] = Array.from({ length: 30 }).map((_, index) => ({
  id: index.toString(),
  imgSource: { uri: `https://picsum.photos/200/200?random=${index}` },
}));

const screenWidth = Dimensions.get('window').width;
const IMAGE_SIZE = screenWidth / 3;

export default function GlobalFeed() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [search, setSearch] = useState('');

  const loadMore = () => {
    const morePosts = Array.from({ length: 30 }).map((_, index) => ({
      id: (posts.length + index).toString(),
      imgSource: { uri: `https://picsum.photos/200/200?random=${posts.length + index}` },
    }));
    setPosts((prev) => [...prev, ...morePosts]);
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#999"
        value={search}
        onChangeText={setSearch}
      />

      {/* Grid */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Image source={item.imgSource} style={styles.image} />}
        numColumns={3}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  searchBar: {
    height: 40,
    margin: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#3a3c41',
    color: '#fff',
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
});
