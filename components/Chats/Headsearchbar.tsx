import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const Headsearchbar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default Headsearchbar;