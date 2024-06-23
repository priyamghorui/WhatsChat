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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchLogo from '../components/Universal/SearchLogo';
export default function Calls() {
  return (
    <View style={{flex: 1, justifyContent: 'space-between',margin:10,backgroundColor:"#fff"}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <HeadTitle
              title="Calls"
              color="black"
              styleVareent="normal"
            />
            <View style={{flexDirection: 'row'}}>
              <QrCode />
              <Camera />
              <SearchLogo/>
              <Settings />
            </View>
          </View>
        </View>

       
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'flex-end',
          bottom: 25,
        }}>
          <View>
      <View
        style={{
          borderColor: 'green',
          borderRadius: 22,
          borderWidth: 11,
          backgroundColor: 'green',
        }}>
        <MaterialIcons
          name={'add-call'}
          size={35}
          color={'white'}
        />
      </View>
    </View>
      </View>
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
