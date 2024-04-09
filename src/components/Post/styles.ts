import { StyleSheet } from 'react-native';
import { THEME } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  image: {
    borderRadius: 22
  },
  title: {
    fontSize: 14,
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.BOLD
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 7
  }
});
