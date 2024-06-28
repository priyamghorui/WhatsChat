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
import { Provider } from 'react-redux';
import store from './redux/store/store';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navegation() {
  return (
    <Provider store={store}>
      
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      
    }}>
      <Stack.Screen name="NavegationTabBar" component={NavegationTabBar} />
      
      <Stack.Screen name="IndivisualChat" component={IndivisualChat} />
    </Stack.Navigator>
        </Provider>
  );
}

function NavegationTabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {fontSize: 15,bottom:15},
        tabBarStyle:{backgroundColor:"#fff",height:80,marginTop:-20},
        tabBarBadgeStyle:{backgroundColor:"green",borderRadius:9,width:30,height:19 ,fontSize:14}
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
                size={30}
                color={color}
                />
              );
            },
            tabBarBadge: 3,
          }}
          />

      <Tab.Screen
        name="Updates"
        component={Updates}
        options={{
          tabBarBadgeStyle:{backgroundColor:"green",borderRadius:9},
          tabBarLabel: 'Updates',
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="at-circle" size={30} color={color} />;
          },
          tabBarBadge: '',

        }}
      />
      <Tab.Screen
        name="Communities"
        component={Communities}
        options={{
          tabBarLabel: 'Communities',
          tabBarIcon: ({color, size}) => {
            return <FontAwesome name="users" size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarLabel: 'Calls',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="call" size={30} color={color} />
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
