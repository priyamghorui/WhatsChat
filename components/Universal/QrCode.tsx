import * as React from 'react';
import { View } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const QrCode = () => {

  return (
    
    <View style={{marginRight:20}}>

    <MaterialCommunityIcons name="qrcode-scan" size={29} color={'black'}/>
    </View>
  );
};

export default QrCode;