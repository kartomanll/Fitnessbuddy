import * as React from 'react';
import MainContainer from './navigation/MainContainer'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './navigation/pages/Login';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FIREBASE_APP, FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return(
      <InsideStack.Navigator>
        <InsideStack.Screen name='Home' component={MainContainer} options={{  headerShown: false}} />
      </InsideStack.Navigator>
  );
}

function App() {
  const [initializing, setInitializing] = useState(true);

  const [user, setUser] = useState<User | null>(null);

 



  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    })

  }, [])

  
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user !== null
        ? 
        (<Stack.Screen name='Hme' component={InsideLayout} options={{  headerShown: false}}/>)
        :
        (<Stack.Screen name='Login' component={Login} options={{  headerShown: false}}/>)}
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; 

