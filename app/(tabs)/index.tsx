import { FlatList, ImageSourcePropType, StyleSheet, View } from 'react-native';

import PictureCard from '@/components/PictureCard';

type Post = {
  id: string;
  imgSource: ImageSourcePropType;
};

const posts: Post[] = [
  { id: '1', imgSource: require('@/assets/images/IMG_4873.jpeg') },
  { id: '2', imgSource: require('@/assets/images/IMG_4879.jpeg') },
  { id: '3', imgSource: require('@/assets/images/IMG_4858.jpeg') },
  { id: '4', imgSource: require('@/assets/images/IMG_4867.jpeg') },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PictureCard imgSource={item.imgSource} />}
        showsVerticalScrollIndicator={false}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  imageContainer: {
    flex: 1,
  },
});
