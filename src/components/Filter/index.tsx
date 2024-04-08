import { Text, Pressable, PressableProps } from 'react-native';
import { styles } from './styles';

export default function Filter({
  selected,
  filter,
  ...rest
}: PressableProps & FilterProps) {
  return (
    <Pressable {...rest} style={[styles.pressable, selected && styles.pressableSelected]}>
      <Text style={styles.text}>{filter}</Text>
    </Pressable>
  );
}
