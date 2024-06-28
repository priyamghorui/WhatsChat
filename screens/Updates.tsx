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
import SearchLogo from '../components/Universal/SearchLogo';
export default function Updates() {
  return (
    <View style={{flex: 1, justifyContent: 'space-between',padding:10,backgroundColor:"#fff"}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <HeadTitle title="Updates" color="black" styleVareent="normal" />
            <View style={{flexDirection: 'row'}}>
              <QrCode />
              <Camera />
              <SearchLogo />
              <Settings />
            </View>
          </View>
          <Text variant="titleLarge" style={{fontWeight: 'bold'}}>
            Status
          </Text>
          <View style={{flexDirection: 'row'}}>
            {/* <Status /> */}
            <View style={{alignItems: 'center'}}>
              <FontAwesome name="user-circle" size={59} color={'grey'} />
              <Text>hello</Text>
            </View>
            <Status />
          </View>
        </View>
        <View style={{borderWidth: 0.25,borderColor:"grey"}}></View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text variant="titleLarge" style={{fontWeight: 'bold'}}>
            Channels
          </Text>
          <MaterialCommunityIcons name="plus" size={35} color={'black'} />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text variant="titleLarge" style={{fontWeight: 'bold'}}>
            Find channels
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 17}}>See all</Text>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'flex-end',
          bottom: 25,
        }}>
        <ImportUser iconName="camera-outline" />
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
