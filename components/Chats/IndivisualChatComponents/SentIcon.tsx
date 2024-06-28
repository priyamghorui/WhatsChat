import * as React from 'react';
import {View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const SentIcon = () => {
  return (
    <View>
      <View
        style={{
          borderColor: 'green',
          borderRadius: 30,
          borderWidth: 11,
          backgroundColor: 'green',
          marginLeft:1
        }}>
        <MaterialIcon name="send" size={28} color={'white'} />
      </View>
    </View>
  );
};

export default SentIcon;
