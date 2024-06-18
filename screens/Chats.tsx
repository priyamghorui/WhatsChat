import * as React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import Headsearchbar from '../components/Chats/Headsearchbar';
import HeadTitle from '../components/Universal/HeadTitle';
import Camera from '../components/Universal/Camera';
import QrCode from '../components/Universal/QrCode';
import Settings from '../components/Universal/Settings';
import ChatsContent from '../components/Chats/ChatsContent';
import ImportUser from '../components/Universal/ImportUser';

export default function Chats() {
  return (
    <View style={{flex:1,justifyContent:"space-between"}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <HeadTitle title="WhatsChats" color="green" />
            <View style={{flexDirection: 'row'}}>
              <QrCode />
              <Camera />
              <Settings />
            </View>
          </View>
          <Headsearchbar />
          <ChatsContent />
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'flex-end',
          bottom: 5,
        }}>
        <ImportUser />
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
