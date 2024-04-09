import { useEffect } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming
} from 'react-native-reanimated';

import { THEME } from '@/theme';

export default function Splash() {
  const logoScale = useSharedValue(1);
  const logoPositionY = useSharedValue(0);

  const dimentions = useWindowDimensions();

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {scale: logoScale.value},
      {translateY: logoPositionY.value},
    ]
  }));

  function logoAnimation() {
    logoScale.value = withSequence(
      withTiming(0.7),
      withTiming(1.3),
      withTiming(1, undefined, (finished) => {
        if (finished) {
          logoPositionY.value = withSequence(withTiming(50), withTiming(-dimentions.height, {duration: 400}));
        }
      }),
    )
  }

  useEffect(() => {
    logoAnimation();
  }, []);

  return <View style={styles.container}>
    <Animated.Image
      source={require('@/assets/logo.png')}
      style={[styles.logo, logoAnimatedStyle]}/>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.BLACK,
  },
  logo: {
    width: 64,
    height: 64,
  }
});
