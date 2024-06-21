import * as React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {
  ActivityIndicator,
  Avatar,
  Card,
  IconButton,
  MD2Colors,
  Text,
} from 'react-native-paper';
import HeadTitle from '../components/Universal/HeadTitle';
import QrCode from '../components/Universal/QrCode';
import Camera from '../components/Universal/Camera';
import Settings from '../components/Universal/Settings';
import ImportUser from '../components/Universal/ImportUser';
import Status from '../components/Updates/Status';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchLogo from '../components/Universal/SearchLogo';
import Video from '../components/Universal/Video';
import CallsIcon from '../components/Universal/CallsIcon';
import TypeMassage from '../components/Chats/IndivisualChatComponents/TypeMassage';
import MicrophoneIcon from '../components/Chats/IndivisualChatComponents/MicrophoneIcon';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function IndivisualChat({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <MaterialCommunityIcons
                name="arrow-left"
                size={36}
                color={'black'}
              />
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Video />
              <CallsIcon />
              <Settings />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TypeMassage />
        <MicrophoneIcon />
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
