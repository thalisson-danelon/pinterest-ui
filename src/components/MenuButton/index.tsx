import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { THEME } from '@/theme';
import { ManuButtonProps } from '@/components/MenuButton/manuButton';

export default function MenuButton({title, icon}: ManuButtonProps) {
  return <Pressable style={styles.container}>
    <View style={styles.icon}>
      <MaterialCommunityIcons
        name={icon}
        size={32}
        borderRadius={50}
        color={THEME.COLORS.WHITE}
      />
    </View>
    <Text style={styles.text}>{title}</Text>
  </Pressable>
}
