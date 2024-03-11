/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {initializeApp} from '@react-native-firebase/app';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: 'AIzaSyC4BgUA7WfBkZIQ6w6hWdf7nafLgjep-aA',
    authDomain: 'uapp-132ac-default-rtdb.firebaseio.com',
    databaseURL: 'https://uapp-132ac-default-rtdb.firebaseio.com',
    projectId: 'uapp-132ac',
    storageBucket: 'uapp-132ac.appspot.com',
    messagingSenderId: '362707370482',
    appId: '1:39748654112:android:9f9ccb96201fde24891845',
  };

  


AppRegistry.registerComponent(appName, () => App);

