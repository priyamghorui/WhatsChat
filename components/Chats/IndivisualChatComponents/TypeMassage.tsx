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
        icon={() => <Entypo name="emoji-happy" size={27} color={'grey'} />}
        placeholder="Massage"
        onChangeText={setSearchQuery}
        // value={searchQuery}
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
          <View style={{marginRight: 9}}>
            <MaterialIcons name="attach-file" size={26} color={'grey'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{marginRight: 9}}>
            <View
              style={{backgroundColor: 'grey', borderRadius: 55, padding: 3}}>
              <MaterialIcons name="currency-rupee" size={20} color={'#fff'} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{marginRight: 9}}>
            <MaterialCommunityIcons
              name="camera-outline"
              size={26}
              color={'grey'}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TypeMassage;
