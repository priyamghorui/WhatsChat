import * as React from 'react';
import {View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ForwardIcon from './ForwardIcon';

const SentAndReciveData = ({side, data, displayViewStatus}) => (
  <View>
    {side == 'flex-end' ? (
      <View style={{alignSelf: side, flexDirection: 'row'}}>
        <ForwardIcon />
        <Card
          style={{
            display: 'flex',
            flexDirection: 'row',
            // alignSelf: side,
            borderColor: '#D9FDD3',
            borderWidth: 3,
            borderRadius: 6,
          }}>
          <Card.Content>
            <Text variant="bodyMedium">{data.massage}</Text>
          </Card.Content>
          <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
            <Text>{data.time}</Text>
            <Ionicons
              name="checkmark-done"
              size={20}
              color={displayViewStatus}
            />
          </View>
        </Card>
      </View>
    ) : (
      <View style={{alignSelf: side, flexDirection: 'row'}}>
        <Card
          style={{
            display: 'flex',
            flexDirection: 'row',
            // alignSelf: side,
            borderColor: '#D9FDD3',
            borderWidth: 3,
            borderRadius: 6,
          }}>
          <Card.Content>
            <Text variant="bodyMedium">{data.massage}</Text>
          </Card.Content>

          <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
            <Text>{data.time}</Text>
          </View>
        </Card>
        <ForwardIcon />
      </View>
    )}
  </View>
);

export default SentAndReciveData;
