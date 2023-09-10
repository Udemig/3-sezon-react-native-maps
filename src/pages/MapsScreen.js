import React, {useState} from 'react';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  Polyline,
  Polygon,
} from 'react-native-maps';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import {themeColors} from '../themes';
import * as Icon from 'react-native-feather';

export default function MapsScreen() {
  const [riderLocation, setRiderLocation] = useState({
    latitude: 40.9586715,
    longitude: 29.0957685,
  });

  return (
    <View className="flex-1">
      <StatusBar backgroundColor={themeColors.bgColor(1)} />
      <MapView
        mapType="standard"
        showsMyLocationButton
        showsUserLocation
        provider={PROVIDER_GOOGLE}
        className="flex-1"
        initialRegion={{
          latitude: 41.0053215,
          longitude: 29.0121795,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Polygon
          coordinates={[
            {
              latitude: 40.9811636,
              longitude: 29.0424535,
            },
            riderLocation,
            {
              latitude: 41.0084048,
              longitude: 29.0180763,
            },
          ]}
          fillColor={themeColors.bgColor(1)}
        />

        {/* 
        <Polyline
          coordinates={[
            {
              latitude: 40.9811636,
              longitude: 29.0424535,
            },
            riderLocation,
            {
              latitude: 41.0084048,
              longitude: 29.0180763,
            },
          ]}
          strokeColor={themeColors.bgColor(1)} // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={['#E5845C', '#238C23', '#7F0000']}
          strokeWidth={3}
          lineCap="square"
        /> */}

        <Marker
          draggable
          coordinate={{
            latitude: 40.9811636,
            longitude: 29.0424535,
          }}
          title="Kadıköy Şubem"
          description="En iyi Kahveler bizde :)"
          pinColor={themeColors.bgColor(1)}
        />
        <Marker
          draggable
          coordinate={{
            latitude: 41.0084048,
            longitude: 29.0180763,
          }}
          title="Üsküdar Şubem"
          description="En iyi Kahveler bizde :)"
          pinColor={themeColors.bgColor(1)}
        />

        <Marker
          draggable
          coordinate={riderLocation}
          onDragEnd={event => setRiderLocation(event.nativeEvent.coordinate)}
          title="Bostancı Şubem"
          description="En iyi Kahveler bizde :)">
          <Image
            className="h-24 w-24"
            source={require('../assets/images/bikeGuy2.gif')}
          />
        </Marker>
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View style={{backgroundColor: 'rgba(255,255,255,0.4)'}}>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 Minites
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your Order is own its way
            </Text>
          </View>
          <Image
            style={{backgroundColor: 'rgba(255,255,255,0.4)'}}
            source={require('../assets/images/bikeGuy2.gif')}
            className="h-24 w-24 rounded-full"
          />
        </View>

        <View
          className="p-2 flex-row justify-between items-center rounded-full my-5  mx-2"
          style={{backgroundColor: themeColors.bgColor(0.8)}}>
          <View className="p-1 rounded-full">
            <Image
              source={require('../assets/images/deliveryGuy.png')}
              className="w-16 h-16 rounded-full"
            />
          </View>

          <View className="flex-1 ml-1">
            <Text className="text-lg text-white font-bold">
              Furkan Türkyılmaz
            </Text>
            <Text className="text-lg text-white">Your Rider</Text>
          </View>

          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity
              className="bg-white p-2 rounded-full"
              onPress={() => console.log('Answer Call')}>
              <Icon.Phone fill={'green'} stroke={'green'} strokeWidth={1} />
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-white rounded-full p-2"
              onPress={() => console.log('Cancel Call')}>
              <Icon.X stroke={'red'} strokeWidth={5} />
            </TouchableOpacity>
          </View>
          {/* Altbar */}
        </View>
      </View>
    </View>
  );
}
