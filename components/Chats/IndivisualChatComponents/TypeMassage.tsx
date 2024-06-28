import * as React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon, Searchbar, Text, TextInput} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';

const TypeMassage = props => {
  // const [searchQuery, setSearchQuery] = React.useState('');
  const [sendValue, setSendValue] = React.useState('');
  const reduxSentChat = useSelector(state => state.sendchatreducer);
  React.useEffect(() => {
    setSendValue('');
  }, [reduxSentChat]);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {/* <Searchbar
     
        icon={() => <Entypo name="emoji-happy" size={27} color={'grey'} />}
        placeholder="Massage"
        onChangeText={e => {
          // setSearchQuery(e)
          setSendValue(e);
          props.onDataReceived(e);
        }}
        value={sendValue}
        style={{backgroundColor: '#fff'}}
      /> */}
      <TextInput
        mode="outlined"
        outlineColor="#fff"
        activeOutlineColor="#fff"
        outlineStyle={{borderRadius: 45}}
        placeholder="Massage"
        onChangeText={e => {
          // setSearchQuery(e)
          setSendValue(e);
          props.onDataReceived(e);
        }}
        value={sendValue}
        style={{backgroundColor: '#fff'}}
      />
      <View
        style={{
          position: 'absolute',
          alignSelf: 'flex-end',
          flexDirection: 'row',
          right: 13,
        }}>
        <TouchableOpacity>
          <View style={{marginRight: 9}}>
            <MaterialIcons name="attach-file" size={26} color={'grey'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{marginRight: 9}}>
            <View
              style={{backgroundColor: 'grey', borderRadius: 55, padding: 3}}>
              <MaterialIcons name="currency-rupee" size={20} color={'#fff'} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{marginRight: 9}}>
            <MaterialCommunityIcons
              name="camera-outline"
              size={26}
              color={'grey'}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default TypeMassage;
