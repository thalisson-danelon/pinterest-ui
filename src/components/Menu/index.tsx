import { View, Text } from 'react-native';
import { styles } from './styles';
import BottomSheet from '@gorhom/bottom-sheet';
import { forwardRef } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import MenuButton from '@/components/MenuButton';

export const Menu = forwardRef<BottomSheet, MenuProps>(({onClose}, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 215]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome name="close" size={24} onPress={onClose} style={styles.close}/>
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>
        <View style={styles.options}>
          <MenuButton title='Pin' icon='pin'/>
          <MenuButton title='Colagem' icon='content-copy'/>
          <MenuButton title='Pasta' icon='collage'/>
        </View>
      </View>
    </BottomSheet>
  );
});
