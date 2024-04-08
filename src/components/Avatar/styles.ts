import { StyleSheet } from 'react-native';
import { THEME } from '@/theme';

export const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    borderRadius: 25
  },
  selected: {
    borderWidth: 2,
    borderColor: THEME.COLORS.WHITE
  }
})
