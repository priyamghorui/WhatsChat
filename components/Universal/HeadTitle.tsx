import * as React from 'react';
import { Text } from 'react-native-paper';

const HeadTitle = ({title,color,styleVareent}) => {

  return (
    <Text variant="headlineSmall" style={{fontWeight:styleVareent,color:color}}>{title}</Text>
  );
};

export default HeadTitle;