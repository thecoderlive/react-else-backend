import React from 'react'
import { Image, View, FlatList, StyleSheet } from 'react-native'



const storiesItem = ({ item }) => (
<View style={styles.stories_item}>
<Image
    style={styles.story_image}
    source={{uri: item.story_image}}
    />
</View>
  );

const Stories = ({ item }) => (
<FlatList
    style={styles.stories}
    data={item}
    renderItem={storiesItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default Stories;

const styles = StyleSheet.create({
story_image: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  }
});