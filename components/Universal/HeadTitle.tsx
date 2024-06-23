import * as React from 'react';
import { Text } from 'react-native-paper';

const HeadTitle = ({title,color,styleVareent}) => {

  return (
    <Text variant="headlineSmall" style={{fontWeight:styleVareent,color:color,fontSize:27.5}}>{title}</Text>
  );
};

export default HeadTitle;