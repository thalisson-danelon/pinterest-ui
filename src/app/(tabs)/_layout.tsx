import { Tabs } from 'expo-router';
import { Foundation, Ionicons } from '@expo/vector-icons';
import { THEME } from '@/theme';

export default function TabLayout() {
  return (
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
        name="messages"
        options={{
          tabBarIcon: ({size, color}) => <Ionicons name="chatbubble-ellipses" size={size} color={color}/>
        }}
      />
      <Tabs.Screen
        name="profile"
      />
    </Tabs>
  )
}
