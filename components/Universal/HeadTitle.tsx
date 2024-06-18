import * as React from 'react';
import { Text } from 'react-native-paper';

const HeadTitle = ({title,color}) => {

  return (
    <Text variant="headlineSmall" style={{fontWeight:"bold",color:color}}>{title}</Text>
  );
};

export default HeadTitle;