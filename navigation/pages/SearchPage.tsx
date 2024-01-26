import * as React from 'react';
import { View, Text, Button, TextInput, Keyboard } from 'react-native';
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, set, get } from "firebase/database";
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Firestore } from 'firebase/firestore';
import {firebase} from '../../FirebaseConfig'
import { err } from 'react-native-svg/lib/typescript/xml';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/compat/firestore';






export default function SearchPage({ navigation }) {

  
  const workoutRef = firebase.firestore().collection('workoutsData');
  const [addData ,setAddData] = useState('');
  const [titleData ,setTitleData] = useState('');
  const [descriptionData ,setDescriptionData] = useState('');



  const addField = () => {
    if (titleData && descriptionData){
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        title: titleData,
        description: descriptionData,
        timeOfUploading: timestamp,
        imageURL:'./profilna.jpg'
      };
      workoutRef
        .add(data)
        .then(() => {
            setTitleData('');
            setDescriptionData('');
            Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
          
        })
    }
  }

  
  const firebaseConfig = {
    apiKey: "AIzaSyCe4lKMpO9SWeRFPyBrLg4J-y8PtksqygU",
    authDomain: "fitnessbuddy-7285d.firebaseapp.com",
    projectId: "fitnessbuddy-7285d",
    storageBucket: "fitnessbuddy-7285d.appspot.com",
    messagingSenderId: "156640071530",
    appId: "1:156640071530:web:f59ae5581aec08c6e25f13",
    measurementId: "G-HL8EM44TX0",
    databaseURL: "fitnessbuddy-7285d.firebaseapp.com"
  };


  return (
    <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput 
        editable 
        autoCapitalize='none' 
        placeholder='Title' 
        style={{ borderColor: "gray", width: 200, borderWidth: 1, borderRadius: 10, marginBottom: 10, padding: 10 }}  
        onChangeText={(title) => setTitleData(title)} 
        value={titleData}
        />

        <TextInput 
        autoCapitalize='none' 
        placeholder='Description' 
        style={{ borderColor: "gray", width: 200, borderWidth: 1, borderRadius: 10, marginBottom: 10, padding: 10 }} 
        onChangeText={(description) => setDescriptionData(description)} 
        value={descriptionData}
        />
        <Button onPress={addField} title='Add'/>
      </View>
    </View>
  );
}



