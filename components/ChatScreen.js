import React from 'react';
import { View,  } from 'react-native';

import {WebView} from 'react-native-webview';



export default function ChatScreen()  {
  return(
  <View style={{flex:1}}>
    <WebView source={{uri:'https://tawk.to/chat/6436ef8731ebfa0fe7f7f086/1gtr9fc12'}} />
    
  </View>
)}

