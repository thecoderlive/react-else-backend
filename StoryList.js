import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const storyListItem = ({ item }) => (
<View style={styles.story_list_item}>
<Image
    style={styles.story_image}
    source={{uri: item.story_image}}
    />
<Text style={styles.start_time}>{item.start_time}</Text>
<Text style={styles.end_time}>{item.end_time}</Text>
</View>
  );

const StoryList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.story_list}
    data={item}
    renderItem={storyListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default StoryList;

const styles = StyleSheet.create({
story_image: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  },
start_time: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
end_time: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  }
});