import { Tabs } from 'expo-router';
import { FontAwesome5, Foundation, Ionicons } from '@expo/vector-icons';
import { THEME } from '@/theme';
import Avatar from '@/components/Avatar';
import { View } from 'react-native';
import { Menu } from '@/components/Menu';
import { useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

export default function TabLayout() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand();
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0);

  return (
    <View style={{flex: 1}}>
      <Tabs screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: THEME.COLORS.WHITE,
        tabBarInactiveTintColor: THEME.COLORS.GRAY[600],
        tabBarStyle: {
          borderBlockColor: THEME.COLORS.BLACK,
          backgroundColor: THEME.COLORS.BLACK,
        }
      }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({size, color}) => <Foundation name="home" size={size} color={color}/>
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({size, color}) => <Ionicons name="search" size={size} color={color}/>
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            tabBarIcon: ({size, color}) => <FontAwesome5 name="plus" size={size} color={color}/>,
          }}
          listeners={() => ({
            tabPress: (event) => {
              event.preventDefault();
              handleBottomSheetOpen();
            }
          })}
        />
        <Tabs.Screen
          name="messages"
          options={{
            tabBarIcon: ({size, color}) => <Ionicons name="chatbubble-ellipses" size={size} color={color}/>
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({color}) => <Avatar
              selected={color === THEME.COLORS.WHITE}
              source={{uri: 'https://github.com/thalisson-danelon.png'}}
            />
          }}
        />
      </Tabs>
      <Menu ref={bottomSheetRef} onClose={handleBottomSheetClose}/>
    </View>
  )
}
