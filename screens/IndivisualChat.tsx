import * as React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
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
import img from '../assets/image/BackgroundimgWhatApp.jpg';
import SentAndReciveData from '../components/Chats/IndivisualChatComponents/SentAndReciveData';
import ForwardIcon from '../components/Chats/IndivisualChatComponents/ForwardIcon';

export default function IndivisualChat({navigation}) {
  // const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
  return (
    <View style={{flex: 1, justifyContent: 'space-between',backgroundColor:"#fff"}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems:"center",padding:8}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
          <Avatar.Image
            size={50}
            source={require('../assets/image/user.png')}
          />
          <View>
            <Text variant="titleLarge">Title Large</Text>
            <Text style={{color: 'grey'}}>Title Medium</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Video />
          <CallsIcon />
          <Settings />
        </View>
      </View>
      <View style={{flex: 1}}>
        <ImageBackground
          source={img}
          resizeMode="cover"
          style={{
            height: Dimensions.get('window').height,
            flex: 1,
            flexDirection: 'column',
          }}>
          <View style={{margin:16}}>
            <SentAndReciveData
              side={'flex-end'}
              data={{date: '1/2/2000', massage: 'hello1', time: '10:44'}}
              displayViewStatus={'#6BD0FF'}
            />
            <SentAndReciveData
              side={'flex-start'}
              data={{date: '1/2/2000', massage: 'hello2', time: '10:44'}}
              displayViewStatus={'grey'}
            />
            <SentAndReciveData
              side={'flex-end'}
              data={{date: '1/2/2000', massage: 'hello3', time: '10:44'}}
              displayViewStatus={'#6BD0FF'}
            />
            <SentAndReciveData
              side={'flex-end'}
              data={{date: '1/2/2000', massage: 'hello', time: '10:44'}}
              displayViewStatus={'grey'}
            />
             <SentAndReciveData
              side={'flex-start'}
              data={{date: '1/2/2000', massage: 'hello', time: '10:44'}}
              displayViewStatus={'grey'}
            />
             <SentAndReciveData
              side={'flex-start'}
              data={{date: '1/2/2000', massage: 'hello', time: '10:44'}}
              displayViewStatus={'grey'}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',padding:5}}>
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
