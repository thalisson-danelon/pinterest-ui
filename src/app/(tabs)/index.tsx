import { View, StyleSheet } from 'react-native';
import { THEME } from '@/theme';
import Filters from '@/components/Filters';
import { FILTERS } from '@/utils/filters';
import { useState } from 'react';
import Posts from '@/components/Posts';
import { POSTS } from '@/utils/posts';

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0]);

  return (
    <View style={styles.container}>
      <Filters filters={FILTERS} filter={filter} onChange={setFilter}/>
      <Posts posts={POSTS}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BLACK,
    padding: 12,
    paddingTop: 52,
  },
  text: {
    fontSize: 22,
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.BOLD,
  }
});

