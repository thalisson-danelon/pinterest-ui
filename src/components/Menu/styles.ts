import { StyleSheet } from 'react-native';
import { THEME } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.GRAY[800],
    borderRadius: 30,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: THEME.FONTS.MEDIUM,
    fontSize: 18,
    color: THEME.COLORS.WHITE,
    marginRight: 24
  },
  close: {
    color: THEME.COLORS.WHITE
  },
  options: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 32
  }
});
