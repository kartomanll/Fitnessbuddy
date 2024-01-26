import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { useState } from 'react';
import { UserInfo, onAuthStateChanged } from 'firebase/auth';



export default function ProfilePage({navigation}){ 
    const [user, setUser] = useState<UserInfo | null>(null);

    const userEmail: string | null = user?.email || null;

    
    
    return(

        <View style={{flex: 1, justifyContent: 'center' }}>

            <Button onPress={() => FIREBASE_AUTH.signOut()} title='Log out'/>
            <Text></Text>
            <Text>fadf</Text>

        </View>

    );

}