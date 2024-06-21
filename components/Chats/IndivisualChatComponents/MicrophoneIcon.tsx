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
        }}>
        <MaterialIcon name="mic" size={35} color={'white'} />
      </View>
    </View>
  );
};

export default MicrophoneIcon;
