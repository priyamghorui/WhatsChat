import * as React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {ActivityIndicator, MD2Colors, Text} from 'react-native-paper';
import HeadTitle from '../components/Universal/HeadTitle';
import QrCode from '../components/Universal/QrCode';
import Camera from '../components/Universal/Camera';
import Settings from '../components/Universal/Settings';
import ImportUser from '../components/Universal/ImportUser';
import Status from '../components/Updates/Status';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Communities() {
  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <HeadTitle
              title="Communities"
              color="black"
              styleVareent="normal"
            />
            <View style={{flexDirection: 'row'}}>
              <QrCode />
              <Camera />
              <Settings />
            </View>
          </View>
        </View>

       
      </ScrollView>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
