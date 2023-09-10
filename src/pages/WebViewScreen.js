import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

export default function WebViewScreen() {
  const customHTML = `
    <body style="display:flex; flex-direction: column;justify-content: center; 
      align-items:center; background-color: black; color:white; height: 100%;">
        <h1 style="font-size:100px; padding: 50px; text-align: center;" 
        id="h1_element">
          This is simple html
        </h1>
        <h2 style="display: block; font-size:80px; padding: 50px; 
        text-align: center;" id="h2_element">
          This text will be changed later!
        </h2>
     </body>`;

  return (
    <SafeAreaView className="flex-1">
      <WebView
        source={{
          //   html: customHTML,
          uri: 'https://www.africau.edu/images/default/sample.pdf',
        }}
      />
    </SafeAreaView>
  );
}
