import * as React from 'react';
import {View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ForwardIcon from './ForwardIcon';

const SentAndReciveData = ({side, data, displayViewStatus}) => (
  <View>
    {side == 'flex-end' ? (
      <View style={{alignSelf: side, flexDirection: 'row', marginBottom: 10}}>
        <ForwardIcon />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            // alignSelf: side,
            borderColor: '#D9FDD3',
            borderWidth: 3,
            borderRadius: 9,
            backgroundColor: '#D9FDD3',
            padding: 4,
          }}>
          <View>
            <Text
              // variant="titleMedium"
              style={{color: '#0B141A', fontSize: 18}}>
              {data.massage}
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
              flexDirection: 'row',
              bottom: -8,
              marginLeft: 8,
            }}>
            <Text variant="bodySmall" style={{color: '#728876', fontSize: 13}}>
              {data.time}
            </Text>
            <Ionicons
              name="checkmark-done"
              size={20}
              color={displayViewStatus}
            />
          </View>
        </View>
      </View>
    ) : (
      <View style={{alignSelf: side, flexDirection: 'row', marginBottom: 10}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            // alignSelf: side,
            borderColor: '#fff',
            borderWidth: 3,
            borderRadius: 9,
            backgroundColor: '#fff',
            padding: 4,
          }}>
          <View>
            <Text
              // variant="titleMedium"
              style={{color: '#0B141A', fontSize: 18}}>
              {data.massage}
            </Text>
          </View>

          <View
            style={{
              alignSelf: 'flex-end',
              flexDirection: 'row',
              bottom: -8,
              marginLeft: 8,
            }}>
            <Text variant="bodySmall" style={{color: '#728876', fontSize: 13}}>
              {data.time}
            </Text>
          </View>
        </View>
        <ForwardIcon />
      </View>
    )}
  </View>
);

export default SentAndReciveData;
