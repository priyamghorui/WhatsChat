import * as React from 'react';
import { View } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const QrCode = () => {

  return (
    
    <View>

    <MaterialCommunityIcons name="qrcode-scan" size={36} color={'black'}/>
    </View>
  );
};

export default QrCode;