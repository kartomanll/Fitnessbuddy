import { View, Text, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_APP, FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    ﻿const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); 
    const auth = FIREBASE_AUTH;

    const singIn = async () => {
        setLoading(true);
        
        ﻿try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            } catch (error) {
            console.log(error);
            } finally {
            setLoading (false);
            }
    }

    const singUp = async () => {
        setLoading(true);
        ﻿try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            } catch (error) {
            console.log(error);
            } finally {
            setLoading (false);
            }
    }

  return (
    <View style={{marginHorizontal: 20,flex: 1, justifyContent: 'center'}}>
        <KeyboardAvoidingView behavior='padding'>
        <TextInput style={{}} placeholder='Email' autoCapitalize='none'   value={email}  onChangeText={(text) => setEmail(text)}></TextInput>
        <TextInput style={{}} secureTextEntry={true} placeholder='Password' autoCapitalize='none'   value={password}  onChangeText={(text) => setPassword(text)}></TextInput>
        {loading ? <ActivityIndicator size={'large'} color={'#0000ff'}  />
          : ( <>
            <Button title='Login' onPress={singIn}/>
            <Button title='Create Acc' onPress={singUp}/>

            </>    
        )}
    </KeyboardAvoidingView>
    </View>
  )
}


export default Login

