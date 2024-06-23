import * as React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const Headsearchbar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={{marginBottom:12.5}}>

    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      // value={searchQuery}
      style={{backgroundColor:"#F6F5F4"}}
      />
      </View>
  );
};

export default Headsearchbar;