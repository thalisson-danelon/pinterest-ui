import { StyleSheet } from 'react-native';
import { THEME } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    paddingBottom: 10
  },
  image: {
    borderRadius: 12
  },
  title: {
    fontSize: 12,
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.MEDIUM
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 3
  }
});
