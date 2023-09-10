import {View, Text, SafeAreaView, Linking, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

export default function WebViewScreen() {
  const [connectionType, setConnectionType] = useState('');
  const [isConnected, setIsConnected] = useState(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('State', state);

      setConnectionType(state.type);

      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handlePress = async () => {
    const supported = Linking.canOpenURL(
      'https://www.npmjs.com/package/react-native-webview',
    );

    if (supported) {
      Linking.openURL('https://www.npmjs.com/package/react-native-webview');
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View>
        <Text className="text-xl font-bold">Type {connectionType}</Text>
        <Text className="text-xl font-bold">IS connected {isConnected}</Text>
        <Button title="Open Url" onPress={() => handlePress()} />
      </View>
    </SafeAreaView>
  );
}
