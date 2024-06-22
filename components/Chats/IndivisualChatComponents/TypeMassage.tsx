import * as React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon, Searchbar} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TypeMassage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Searchbar
        icon={() => <Entypo name="emoji-happy" size={32} color={'grey'} />}
        placeholder="Massage"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{backgroundColor: '#fff'}}
      />
      <View
        style={{
          position: 'absolute',
          alignSelf: 'flex-end',
          flexDirection: 'row',
          right: 13,
        }}>
        <TouchableOpacity>
          <MaterialIcons name="attach-file" size={29} color={'grey'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="currency-rupee" size={29} color={'grey'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="camera-outline"
            size={29}
            color={'grey'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TypeMassage;
