import * as React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';
import Headsearchbar from '../components/Chats/Headsearchbar';
import HeadTitle from '../components/Universal/HeadTitle';
import Camera from '../components/Universal/Camera';
import QrCode from '../components/Universal/QrCode';
import Settings from '../components/Universal/Settings';
import ChatsContent from '../components/Chats/ChatsContent';
import ImportUser from '../components/Universal/ImportUser';

export default function Chats({navigation}) {
  return (

    <View style={{flex: 1, justifyContent: 'space-between',padding:10,backgroundColor:"#fff"}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',marginBottom:18}}>
            <HeadTitle title="WhatsChats" color="green" styleVareent="bold" />
            <View style={{flexDirection: 'row'}}>
              <QrCode />
              <Camera />
              <Settings />
            </View>
          </View>
          <Headsearchbar />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('IndivisualChat');
            }}>
            <ChatsContent />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'flex-end',
          bottom: 25,
        }}>
        <ImportUser iconName="chat-plus-outline" />
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
