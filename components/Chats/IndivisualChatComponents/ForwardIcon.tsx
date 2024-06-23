import * as React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ForwardIcon = () => {

  return (
    <View style={{marginHorizontal:14}}>

    <View style={{borderWidth:2,margin:"auto",borderRadius:55,backgroundColor:'#C8C6C4',borderColor:"#C8C6C4"}}>

<Ionicons name="return-up-forward" size={29} color={'grey'}/>
    </View>
    </View>
  );
};

export default ForwardIcon;