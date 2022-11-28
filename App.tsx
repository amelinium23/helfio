import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './screens/HealthScreen';
import { MyPlanScreen } from './screens/MyPlanScreen';
import { InsightsScreen } from './screens/InsightsScreen';
import { AwardsScreen } from './screens/AwardsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ChattingScreen } from './screens/ChatScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <StatusBar style="auto" />
        <Tab.Navigator
          initialRouteName="Health"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch (route.name) {
                case 'Health':
                  iconName = focused ? 'heart' : 'ios-heart-outline';
                  break;
                case 'My plan':
                  iconName = focused ? 'calendar' : 'calendar-outline';
                  break;
                case 'Insights':
                  iconName = focused ? 'apps' : 'apps-outline';
                  break;
                case 'Awards':
                  iconName = focused ? 'flash' : 'flash-outline';
                  break;
                case 'Chatting':
                  iconName = focused ? 'chatbox' : 'chatbox-outline';
                  break;
                default:
                  iconName = 'link';
                  break;
              }
              return <Ionicons name={iconName as any} size={size} color={color} />;
            },
            tabBarStyle: {
              height: 80,
              paddingBottom: 30,
            },
            tabBarActiveTintColor: '#27593d',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="My plan" component={MyPlanScreen} />
          <Tab.Screen name="Insights" component={InsightsScreen} />
          <Tab.Screen
            name="Health"
            component={HomeScreen}
            options={{
              header() {
                return <View style={{ paddingTop: 60 }} />;
              },
            }}
          />
          <Tab.Screen name="Awards" component={AwardsScreen} />
          <Tab.Screen name="Chatting" component={ChattingScreen} />
        </Tab.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
