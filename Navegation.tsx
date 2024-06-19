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
const Tab = createBottomTabNavigator();

export default function Navegation() {
  return (
    <NavigationContainer>
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Communities() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Communities!</Text>
    </View>
  );
}
function Calls() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Calls!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
