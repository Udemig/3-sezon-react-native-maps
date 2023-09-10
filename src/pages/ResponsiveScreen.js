import {View, Text, SafeAreaView, Image, Dimensions} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export default function ResponsiveScreen() {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: moderateScale(20)}}>
        <Text style={{fontSize: moderateScale(12)}}>ResponsiveScreen</Text>
        <View
          style={{
            backgroundColor: 'red',
            width: scale(100),
            height: verticalScale(100),
            padding: moderateScale(20),
          }}
        />
        <Image
          source={{
            uri: 'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png',
          }}
          style={{width: scale(200), height: verticalScale(200)}}
        />
      </View>
    </SafeAreaView>
  );
}
