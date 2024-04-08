import { StyleSheet } from 'react-native';
import { THEME } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  icon: {
    padding: 24,
    backgroundColor: THEME.COLORS.GRAY[700],
    borderRadius: 22
  },
  text: {
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.MEDIUM,
    fontSize: 14,
    marginTop: 10
  }
});
