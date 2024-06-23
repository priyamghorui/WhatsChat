import * as React from 'react';
import {View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const MicrophoneIcon = () => {
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
        <MaterialIcon name="mic" size={30} color={'white'} />
      </View>
    </View>
  );
};

export default MicrophoneIcon;
