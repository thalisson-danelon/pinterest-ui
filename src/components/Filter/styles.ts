import { StyleSheet } from 'react-native';
import { THEME } from '@/theme';

export const styles = StyleSheet.create({
  pressable: {},
  text: {
    color: THEME.COLORS.WHITE,
    fontSize: 16,
    fontFamily: THEME.FONTS.MEDIUM
  },
  pressableSelected: {
    borderBottomWidth: 3,
    borderBottomColor: THEME.COLORS.WHITE
  },
});
