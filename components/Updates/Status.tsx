import * as React from 'react';
import {View} from 'react-native';
import {Avatar, Text} from 'react-native-paper';
const Status = () => (
  <View style={{alignItems: 'center'}}>
    <View style={{borderWidth: 5, borderRadius: 55}}>
      <Avatar.Image size={50} source={require('../../assets/image/user.png')} />
    </View>
    <Text>hello</Text>
  </View>
);
export default Status;
