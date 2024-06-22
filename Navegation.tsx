import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CommonActions, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, BottomNavigation} from 'react-native-paper';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Chats from './screens/Chats';
import Updates from './screens/Updates';
import Communities from './screens/Communities';
import Calls from './screens/Calls';
import IndivisualChat from './screens/IndivisualChat';
import {createStackNavigator} from '@react-navigation/stack';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navegation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="NavegationTabBar" component={NavegationTabBar} />
      
      <Stack.Screen name="IndivisualChat" component={IndivisualChat} />
    </Stack.Navigator>
  );
}

function NavegationTabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {fontSize: 15},
      }}>
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({color, size}) => {
            return (
              <MaterialIcon
                name="mark-unread-chat-alt"
                size={size}
                color={color}
              />
            );
          },
          // tabBarBadge: 3,
        }}
      />

      <Tab.Screen
        name="Updates"
        component={Updates}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="at-circle" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Communities"
        component={Communities}
        options={{
          tabBarLabel: 'Communities',
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="users" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarLabel: 'Calls',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="call" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
         
         name="IndivisualChat"
         component={IndivisualChat}
         
         /> */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
