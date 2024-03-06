import React, { useEffect } from 'react';
import { Text, Alert, View } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    const getDeviceToken = async () => {
      try {
        const token = await messaging().getToken();
        console.log(token);
      } catch (error) {
        console.error('Error getting device token:', error);
      }
    };
    getDeviceToken();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert(
        'Notification Received',
        JSON.stringify(remoteMessage),
      );
    });
    return unsubscribe;
  }, []);

  return (
    <View>
      <Text>APP</Text>
    </View>
  );
};

export default App;