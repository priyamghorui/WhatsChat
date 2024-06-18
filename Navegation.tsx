import React from 'react';
import { View, StyleSheet } from 'react-native';

import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import Chats from './screens/Chats';
const Tab = createBottomTabNavigator();

export default function Navegation() {
  return (
    <NavigationContainer>  
        
        <View>
{/* <Icon name="stepforward" color="#ff0000" size={20}/> */}
        </View>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
         safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
              
            } else {
             navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
      
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcon name="mark-unread-chat-alt" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Updates"
        component={Updates}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="at-circle" size={size} color={color} />;
          },
        }}
      />
       <Tab.Screen
        name="Communities"
        component={Communities}
        options={{
          tabBarLabel: 'Communities',
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="users" size={size} color={color} />;
          },
        }}
      />
       <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarLabel: 'Calls',
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcon name="call" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
        </NavigationContainer>

  );
}



function Updates() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Updates!</Text>
    </View>
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