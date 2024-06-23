import * as React from 'react';
import { View } from 'react-native';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const CallsIcon = () => {

  return (
    <View style={{marginRight:9}}>

    <MaterialIcon name="call" size={36} color={'black'}/>
    </View>
  );
};

export default CallsIcon;