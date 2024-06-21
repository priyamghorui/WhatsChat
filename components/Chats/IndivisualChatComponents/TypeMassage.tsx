import * as React from 'react';
import {View} from 'react-native';
import {Icon, Searchbar} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

const TypeMassage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={{flex: 1}}>
      <Searchbar
        icon={() => <Entypo name="emoji-happy" size={32} color={'black'} />}
        placeholder="Massage"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};

export default TypeMassage;
