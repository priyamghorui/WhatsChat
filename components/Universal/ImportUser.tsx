import * as React from 'react';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ImportUser = ({iconName}) => {
  return (
    <View>
      <View
        style={{
          borderColor: 'green',
          borderRadius: 22,
          borderWidth: 11,
          backgroundColor: 'green',
          margin:10
        }}>
        <MaterialCommunityIcons
          name={iconName}
          size={35}
          color={'white'}
        />
      </View>
    </View>
  );
};

export default ImportUser;
