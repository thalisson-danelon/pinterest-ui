import { FlatList } from 'react-native';
import Filter from '@/components/Filter';
import { styles } from '@/components/Filters/styles';

export default function Filters({filters, filter, onChange}: FiltersProps) {
  return <FlatList
    data={filters}
    keyExtractor={(item) => item}
    renderItem={
      ({item}) =>
        <Filter
          filter={item}
          selected={item === filter}
          onPress={() => onChange(item)}
        />
    }
    style={styles.list}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.content}
    horizontal
  />;
}
