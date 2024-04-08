import { View, Text, StyleSheet } from 'react-native';
import { THEME } from '@/theme';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.BLACK,
  },
  text: {
    fontSize: 22,
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.BOLD,
  }
});

